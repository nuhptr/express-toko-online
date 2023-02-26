"use strict";

const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await bcrypt.hashSync("rahasia", 10);

    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "John Doe",
        email: "admin@gmail.com",
        role: "KASIR",
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "elfin sanjaya",
        email: "elfin@gmail.com",
        role: "ADMIN",
        password: password,
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
