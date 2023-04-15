import { ITutorial, ITutorialListItem, Tutorial, TutorialListItem } from "@frontend/data/tutorial";

import {
  DocumentData,
  Timestamp,
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import "../lib/firebaseApp";

const db = getFirestore();
const tutorialsRef = collection(db, "tutorials");

function fromFirebase(id: string, data: DocumentData): ITutorial {
  return {
    id,
    name: data.name,
    subtitle: data.subtitle,
    link: data.link,
    category: data.category,
    active: Boolean(data.active),
    author: data.author,
    content: data.content ?? '',
    tags: data.tags ?? [],
    createdAt: (data.createdAt as Timestamp).toDate().toUTCString()
  }
}

export const getTutorialBySlug = async (link: string): Promise<ITutorial> => {
  const q = query(tutorialsRef, where("link", "==", link), limit(1));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    throw "tutorial not found";
  }

  const data = snapshot.docs[0].data();
  const id = snapshot.docs[0].id;

  return fromFirebase(id, data);
};

export const fetchTuorialsList = async (): Promise<ITutorialListItem[]> => {
  const q = query(
    tutorialsRef,
    where("active", "==", true),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);
  const list = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      link: data.link,
      active: data.active,
      author: data.author.nick,
      createdAt: (data.createdAt as Timestamp).toDate().toUTCString()
    } satisfies ITutorialListItem;
  });

  return list;
};
