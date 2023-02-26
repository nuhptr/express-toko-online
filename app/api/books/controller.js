const { Book, Categories } = require("../../db/models");
const { Op } = require("sequelize");

module.exports = {
  // Read
  getAllBooks: async (req, res, next) => {
    try {
      const { keyword = "" } = req.query;

      let condition = {
        user: req.user.id,
      };

      if (keyword !== "") {
        condition = {
          ...condition,
          title: { [Op.like]: `%${keyword}%` },
        };
      }

      const books = await Book.findAll({
        where: condition,
        attributes: [
          "id",
          "user",
          "category",
          "title",
          "author",
          "image",
          "published",
          "price",
          "stock",
        ],
        include: {
          model: Categories,
          attributes: ["id", "name"],
        },
      });

      res.status(200).json({
        message: "Success get all books",
        data: books,
      });
    } catch (error) {
      next(error);
    }
  },

  // Create
  createBook: async (req, res, next) => {},

  // Update
  updateBook: async (req, res, next) => {},

  // Delete
  deleteBook: async (req, res, next) => {},
};
