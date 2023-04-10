import { DocumentData, Timestamp } from "firebase/firestore";

export interface IAuthor {
  displayName: string;
  nick: string;
  avatarUrl: string;
}

/**
 * Tutorial database representation object
 */
export class Tutorial implements ITutorial {
  /**
   * Default contructor of the document
   * @param {string} id firebase document id
   * @param {string} name name of the tutorial
   * @param {string} subtitle subtitle of the tutorial
   * @param {string} link slugged name of the tutorial name
   *  (but editable for SEO purposes)
   * @param {string} category primary category of the tutorial
   * @param {boolean} active active (!draft) state
   * @param {IAuthor} author creator/owner of the document
   * @param {string} createdAt Date as UTC string (with timezone)
   */
  constructor(
    public id: string,
    public name: string,
    public subtitle: string,
    public link: string,
    public category: string,
    public active: boolean,
    public author: IAuthor,
    public createdAt: string
  ) {}

  /**
   * creates tutorial instance from the tutorial interface
   * @param {ITutorial} tutorial the tutorial interface
   * @return {Tutorial}
   */
  static fromInterface(tutorial:ITutorial): Tutorial {
    const t = new Tutorial(tutorial.id!, tutorial.name, tutorial.subtitle, tutorial.link, tutorial.category, tutorial.active, tutorial.author, tutorial.createdAt)
    t.content = tutorial.content;
    t.lastModified = tutorial.lastModified;

    return t;
  }

  tags?: string[];
  content?: string;
  lastModified?: Date;

  /**
   * Converts firebase document to Tutorial item
   * @param {string} id firebase identifier of the document
   * @param {DocumentData} data received firebase snapshot data object
   * @return {Tutorial}
   */
  static fromFirebase(id: string, data: DocumentData): Tutorial {
    const tutorial = new Tutorial(
      id,
      data.name,
      data.subtitle,
      data.link,
      data.category,
      Boolean(data.active),
      data.author,
      (data.createdAt as Timestamp).toDate().toUTCString()
    );

    tutorial.content = data.content ?? "";
    tutorial.tags = data.tags ?? [];

    return tutorial;
  }

  /**
   * Creates
   * @return {DocumentData}
   */
  toFirebase(): DocumentData {
    const data: DocumentData = {
      name: this.name,
      subtitle: this.subtitle,
      link: this.link,
      category: this.category ?? '',
      active: this.active,
      author: this.author,
      tags: this.tags ?? [],
      createdAt: Timestamp.fromMillis(Date.parse(this.createdAt)),
    };

    if (Boolean(this.lastModified)) {
      data.lastModified = Timestamp.fromMillis(Date.parse(this.createdAt))
    }

    if (Boolean(this.content)) {
      data.content = this.content
    }

    return data
  }
}

export interface ITutorial {
  id?: string;
  name: string;
  subtitle: string;
  link: string;
  category: string;
  tags?: string[];
  content?: any;
  active: boolean;
  createdAt: string;
  author: IAuthor;
  lastModified?: Date;
}

/**
 * Tutorial list item for displaying tutorial lists
 */
export class TutorialListItem implements ITutorialListItem {
  /**
   * Default constructor
   * @param {string} id
   * @param {string} name
   * @param {string} link
   * @param {string} active
   * @param {string} author
   * @param {string} createdAt
   */
  constructor(
    readonly id: string,
    readonly name: string,
    readonly link: string,
    readonly active: boolean,
    readonly author: string,
    readonly createdAt: string
  ) {}
}

export interface ITutorialListItem {
  id: string;
  name: string;
  link: string;
  active: boolean;
  author: string;
  createdAt: string;
}

export interface ITutorialsResponse {
  data: ITutorialListItem[];
}