"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Departments",
      [
        {
          title: "Engineer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Finance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Legal",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Sales",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Service",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Departments", null, {});
  },
};
``;
