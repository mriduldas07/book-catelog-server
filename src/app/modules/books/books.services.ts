import { IBooks } from "./books.interface";
import { Books } from "./books.model";

const getAllBooks = async (): Promise<IBooks[]> => {
  const result = (await Books.find({})).reverse();
  return result;
};

const getSingleBook = async (id: string): Promise<IBooks | null> => {
  const result = await Books.findById(id);
  return result;
};

const createBook = async (payload: IBooks): Promise<IBooks> => {
  const result = await Books.create(payload);
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBooks>
): Promise<IBooks | null> => {
  const result = await Books.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBook = async (id: string): Promise<IBooks | null> => {
  const result = await Books.findByIdAndDelete(id);
  return result;
};

export const BooksServices = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
