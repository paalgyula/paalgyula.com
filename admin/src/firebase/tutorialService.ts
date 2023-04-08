import { IAuthor, ITutorial, ITutorialListItem } from '@backend/interfaces/tutorial';
import {
  addDoc,
  getDocs,
  collection as fireCollection,
  getFirestore,
  where,
  query,
  limit,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';

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

export const listTutorials = async (): Promise<ITutorialListItem[]> => {
  const q = query(collection(), limit(50));
  const snapshot = await getDocs(q);

  console.log(snapshot.docs);

  const tutorials = snapshot.docs.map((doc) => {
    const data = doc.data();
    const tutorial = {
      ...data,
      id: doc.id,
      author: (data.author as IAuthor).nick,
      createdAt: (data.createdAt as Timestamp)?.toDate()
    };

    return tutorial as ITutorialListItem;
  });

  return tutorials;
};
