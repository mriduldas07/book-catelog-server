import { RequestHandler } from "express";
import { BooksServices } from "./books.services";

const getAllBooks: RequestHandler = async (req, res) => {
  const result = await BooksServices.getAllBooks();
  res.status(200).json({
    data: result,
  });
};

const getSingleBook: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const result = await BooksServices.getSingleBook(id);
  res.status(200).json({
    data: result,
  });
};

const createBook: RequestHandler = async (req, res) => {
  const { ...bookData } = req.body;
  const result = await BooksServices.createBook(bookData);
  res.status(201).json({
    data: result,
  });
};

const updateBook: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const { ...updatedData } = req.body;
  const result = await BooksServices.updateBook(id, updatedData);
  res.status(200).json({
    data: result,
  });
};

const deleteBook: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const result = await BooksServices.deleteBook(id);
  res.status(200).json({
    data: result,
  });
};

export const BooksController = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};