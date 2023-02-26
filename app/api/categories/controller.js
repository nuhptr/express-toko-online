const { Categories } = require("../../db/models");

module.exports = {
  // Read
  getAllCategory: async (req, res, next) => {
    try {
      const categories = await Categories.findAll({
        // GET /categories?id=req.user.id
        where: { user: req.user.id },
        attributes: ["id", "name"],
      });

      res.status(200).json({
        message: "Get All Categories",
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  },

  // Create
  createCategory: async (req, res, next) => {
    try {
      const { name } = req.body;

      const categories = await Categories.create({
        // POST /categories
        name: name,
        user: req.user.id,
      });

      delete categories.dataValues.createdAt;
      delete categories.dataValues.updatedAt;

      res.status(201).json({
        message: "Success create category",
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  },

  // Update
  updateCategory: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const checkCategory = await Categories.findOne({
        where: { id: id, user: req.user.id },
      });

      const categories = await checkCategory.update({ name: name });

      delete categories.dataValues.createdAt;
      delete categories.dataValues.updatedAt;

      res.status(200).json({
        message: "Success update category",
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete
  deleteCategory: async (req, res, next) => {
    try {
      const { id } = req.params;

      const checkCategory = await Categories.findOne({
        where: { id: id, user: req.user.id },
      });

      await checkCategory.destroy();

      res.status(200).json({
        message: "Success delete category",
      });
    } catch (error) {
      next(error);
    }
  },
};
