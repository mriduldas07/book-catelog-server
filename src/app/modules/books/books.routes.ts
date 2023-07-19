import express from "express";
import { BooksController } from "./books.controller";

const router = express.Router();

router.post("/create-book", BooksController.createBook);
router.get("/books/:id", BooksController.getSingleBook);
router.patch("/books/:id", BooksController.updateBook);
router.delete("/books/:id", BooksController.deleteBook);
router.get("/books", BooksController.getAllBooks);

export const BookRoutes = router;
