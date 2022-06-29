'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          title: "Sales Lead",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Salesperson",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Lead Engineer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Software Engineer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Legal Team Lead",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Lawyer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Accountant",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  }
};
