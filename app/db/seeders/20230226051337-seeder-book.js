"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        image: "/uploads/image1.png",
        published: new Date(),
        price: 90,
        stock: 900,
        user: 1,
        category: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Selena and Nebula",
        author: "Tere Liye",
        image: "/uploads/image2.png",
        published: new Date(),
        price: 90,
        stock: 900,
        user: 1,
        category: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pelukis bisu (the silent painter)",
        author: "Alexandra Bracken",
        image: "/uploads/image3.png",
        published: new Date(),
        price: 90,
        stock: 900,
        user: 1,
        category: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Kecamuk darah (Trouble blood)",
        author: "Laksmi Pamuntjak",
        image: "/uploads/image4.png",
        published: new Date(),
        price: 90,
        stock: 900,
        user: 1,
        category: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Kitab Kawin (edisi terbaru)",
        author: "Robert Kiyosaki",
        image: "/uploads/image5.png",
        published: new Date(),
        price: 90,
        stock: 900,
        user: 1,
        category: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Salvation of a saint",
        author: "Keigo Higashino",
        image: "/uploads/image6.png",
        published: new Date(),
        price: 90,
        stock: 900,
        user: 1,
        category: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
