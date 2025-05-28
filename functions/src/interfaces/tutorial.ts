export interface ITutorialListItem {
  name: string;
  slug: string;
  id: string;
  link: string;
}

export type ITutorialsResponse = ITutorialListItem[];
