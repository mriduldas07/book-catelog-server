import { Model } from "mongoose";

export type IBooks = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
};

export type IBooksModel = Model<IBooks, Record<string, unknown>>;
