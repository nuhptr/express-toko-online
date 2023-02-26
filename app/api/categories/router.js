const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middleware/auth");
const categoriesController = require("./controller");

router.get(
  "/categories",
  authMiddleware.auth,
  categoriesController.getAllCategory
);

router.post(
  "/categories/create",
  authMiddleware.auth,
  categoriesController.createCategory
);

router.put(
  "/categories/update/:id",
  authMiddleware.auth,
  categoriesController.updateCategory
);

router.delete(
  "/categories/delete/:id",
  authMiddleware.auth,
  categoriesController.deleteCategory
);

module.exports = router;
