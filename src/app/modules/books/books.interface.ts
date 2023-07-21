import { Model } from "mongoose";

export type IBooks = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  img: string;
  comments?: string[];
};

export type IComment = {
  comment: string;
};

export type IBooksModel = Model<IBooks, Record<string, unknown>>;
