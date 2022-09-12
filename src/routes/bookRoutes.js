import express from "express";
import bookController from "../controllers/booksController.js";

const router = express.Router();

//Setting routes of book
router
    .get("/books", bookController.showBooks)
    .get("/books/search", bookController.showPublisherBook) //+specific
    .get("/books/:id", bookController.showBook) // -specific
    .post("/books", bookController.addBook)
    .put("/books/:id", bookController.updateBook)
    .delete("/books/:id", bookController.deleteBook)

export default router