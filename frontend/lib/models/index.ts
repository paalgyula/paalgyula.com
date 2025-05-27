export * from "./educations";

export interface IItemLink {
  url: string;
  text: string;
}

export interface IItem {
  category: string;
  image: string;
  imgAlt?: string;
  name: string;
  meta: string;
  link: IItemLink;
}

