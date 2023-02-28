const { Book, Categories } = require("../../db/models");
const { Op } = require("sequelize");

module.exports = {
  // Read
  getAllBooks: async (req, res, next) => {
    try {
      const { keyword = "", category = "" } = req.query;

      let condition = {
        user: req.user.id,
      };

      if (keyword !== "") {
        condition = {
          ...condition,
          title: { [Op.like]: `%${keyword}%` },
        };
      }

      if (category !== "") {
        condition = { ...condition, category: category };
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
  createBook: async (req, res, next) => {
    try {
      let user = req.user.id;
      const { title, author, image, published, price, stock, category } =
        req.body;

      const checkCategory = await Categories.findOne({
        where: { id: category, user: user },
      });

      if (!checkCategory) {
        return res.status(404).json({
          message: "Category not found",
        });
      }

      const book = await Book.create({
        user: user,
        title,
        author,
        image,
        published,
        price,
        stock,
        category,
      });

      res.status(201).json({
        message: "Success create book",
        data: book,
      });
    } catch (error) {
      next(error);
    }
  },

  // Update
  updateBook: async (req, res, next) => {
    try {
      let user = req.user.id;
      const { id } = req.params;
      const { title, author, image, published, price, stock, category } =
        req.body;

      const checkBook = await Book.findOne({
        where: { id: id },
      });

      if (!checkBook) {
        return res.status(404).json({
          message: "Book not found",
        });
      }

      const checkCategory = await Categories.findOne({
        where: { id: category, user: user },
      });

      if (!checkCategory) {
        return res.status(404).json({
          message: "Category not found",
        });
      }

      const updateBook = await checkBook.update({
        title,
        author,
        image,
        published,
        price,
        stock,
        category,
      });

      delete updateBook.dataValues.createdAt;
      delete updateBook.dataValues.updatedAt;

      res.status(200).json({
        message: "Success update book",
        data: updateBook,
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete
  deleteBook: async (req, res, next) => {
    try {
      let user = req.user.id;
      const { id } = req.params;

      const checkBook = await Book.findOne({
        where: { id: id, user: user },
      });

      if (!checkBook) {
        return res.status(404).json({
          message: "Book not found",
        });
      }

      await checkBook.destroy();

      delete checkBook.dataValues.createdAt;
      delete checkBook.dataValues.updatedAt;

      res.status(200).json({
        message: "Success delete book",
        data: checkBook,
      });
    } catch (error) {
      next(error);
    }
  },
};
