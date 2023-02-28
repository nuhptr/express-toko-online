const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const booksController = require("./controller");

router.get("/books", auth, booksController.getAllBooks);
router.post("/book/create", auth, booksController.createBook);
router.put("/book/update/:id", auth, booksController.updateBook);
router.delete("/book/delete/:id", auth, booksController.deleteBook);

module.exports = router;
