const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middleware/auth");
const booksController = require("./controller");

router.get("/books", authMiddleware.auth, booksController.getAllBooks);
router.post("/books/create", authMiddleware.auth, booksController.createBook);
router.put(
  "/books/update/:id",
  authMiddleware.auth,
  booksController.updateBook
);
router.delete(
  "/books/delete/:id",
  authMiddleware.auth,
  booksController.deleteBook
);

module.exports = router;
