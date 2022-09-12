import express from "express"
import authorController from "../controllers/authorController.js"

const router = express.Router()

//Setting routes of author
router
    .get("/authors", authorController.showAuthors)
    .get("/authors/:id", authorController.showAuthor)
    .post("/authors", authorController.addAuthor)
    .put("/authors/:id", authorController.updateAuthor)
    .delete("/authors/:id", authorController.deleteAuthor)

export default router