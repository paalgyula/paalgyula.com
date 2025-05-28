import { Request, Response } from "express";
import { getApp } from "firebase-admin/app";
import {
  DocumentData,
  QueryDocumentSnapshot,
  WithFieldValue,
  getFirestore,
} from "firebase-admin/firestore";
import { ITutorialListItem } from "../interfaces/tutorial";

/**
 * TutorialListItem representation of the tutorial database object
 */
class TutorialListItem implements ITutorialListItem {
  /**
   * Creates a tutorial item from
   * @param {string} id ID of the tutorial item
   * @param {string} name name/title of the tutorial
   * @param {string} slug slugged name for link
   * @param {string} link the link to the doc (doc link?)
   * @param {string} createdBy creator name of the tutorial
   */
  constructor(
    readonly id: string,
    readonly name: string,
    readonly slug: string,
    readonly link: string,
    readonly createdBy: StringConstructor
  ) {}

  /**
   * Converts the document to firebase object
   * @param {WithFieldValue<TutorialListItem>} doc document to be convert
   * @return {DocumentData} firebase document
   */
  static toFirestore(doc: WithFieldValue<TutorialListItem>): DocumentData {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...tutorial } = doc;

    return tutorial;
  }

  /**
   * Converts firestore document to TutorialItem
   * @param {QueryDocumentSnapshot} snapshot firebase snapshot
   * @return {TutorialListItem}
   */
  static fromFirestore(
    snapshot: QueryDocumentSnapshot
    //   options: SetOptions
  ): TutorialListItem {
    const data = snapshot.data()!;
    return new TutorialListItem(
      snapshot.id,
      data.name,
      data.slug,
      data.link,
      data.createdBy
    );
  }
}

export const getTutorials = async (
  req: Request,
  res: Response<TutorialListItem[]>
) => {
  const collection = getFirestore(getApp())
    .collection("tutorials")
    .withConverter(TutorialListItem);

  const docList = await collection.listDocuments();
  const promises = docList.map((doc) => doc.get());

  const docs = await Promise.all(promises);

  res.json(docs.map((doc) => doc.data()!));
};
