'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          title: "Sales Lead",
          department_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Salesperson",
          department_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Lead Engineer",
          department_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Software Engineer",
          department_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Legal Team Lead",
          department_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Lawyer",
          department_id: 3,
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
