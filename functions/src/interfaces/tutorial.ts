import { Timestamp } from "firebase-admin/firestore";

export interface IAuthor {
  displayName: string;
  nick: string;
  avatarUrl: string;
}

export interface ITutorial {
  id?: string;
  name: string;
  subtitle: string;
  link: string;
  category: string;
  tags?: string[];
  content?: string;
  active: boolean;
  createdAt?: Date;
  author: IAuthor;
}

export interface ITutorialListItem {
  id: string;
  name: string;
  link: string;
  active: boolean;
  author: string;
  createdAt?: Date;
}

export interface ITutorialsResponse {
  data: ITutorialListItem[];
}
