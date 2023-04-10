
import {
  Timestamp,
  addDoc,
  doc,
  collection as fireCollection,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { IAuthor, ITutorial, ITutorialListItem, Tutorial } from './tutorial';

const collection = () => {
  const db = getFirestore();
  const collection = fireCollection(db, 'tutorials');

  return collection;
};

export const createTutorial = async (tutorial: ITutorial) => {
  const newDoc = { ...tutorial, createdAt: serverTimestamp() };

  const doc = await addDoc(collection(), newDoc);

  return doc.id;
};

export const getTutorialById = async (id: string): Promise<ITutorial> => {
  const ref = doc(collection(), id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists) {
    throw 'tutorial not found';
  }

  const data = snapshot.data()!;

  return {
    id,
    ...(data as ITutorial),
    author: data.author as IAuthor,
    createdAt: (data.createdAt as Timestamp)?.toDate().toISOString()
  };
};

export const fetchTutorialList = async (): Promise<ITutorialListItem[]> => {
  const q = query(collection(), limit(50));
  const snapshot = await getDocs(q);

  const tutorials = snapshot.docs.map((doc) => {
    const data = doc.data();
    const tutorial = {
      ...(data as ITutorial),
      id: doc.id,
      author: (data.author as IAuthor).nick,
      createdAt: (data.createdAt as Timestamp)?.toDate().toISOString()
    } satisfies ITutorialListItem;

    return tutorial as ITutorialListItem;
  });

  return tutorials;
};

export const updateTutorial = async (tutorial: ITutorial) => {
  const ref = doc(collection(), tutorial.id);

  const data = Tutorial.fromInterface(tutorial).toFirebase();

  return await updateDoc(ref, data);
};
