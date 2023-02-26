"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        image: "/uploads/image 1.png",
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
        image: "/uploads/image 2.png",
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
        image: "/uploads/image 3.png",
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
        image: "/uploads/image 4.png",
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
        image: "/uploads/image 5.png",
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
        image: "/uploads/image 6.png",
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
