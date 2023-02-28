const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const categoriesController = require("./controller");

router.get("/categories", auth, categoriesController.getAllCategory);
router.post("/categories/create", auth, categoriesController.createCategory);
router.put("/categories/update/:id", auth, categoriesController.updateCategory);
router.delete(
  "/categories/delete/:id",
  auth,
  categoriesController.deleteCategory
);

module.exports = router;
