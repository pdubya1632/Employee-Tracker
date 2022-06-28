"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Employees",
      [
        {
          first_name: "John",
          last_name: "Doe",
          role_id: 1,
          manager_id: null,
          is_manager: true,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Mike",
          last_name: "Chan",
          role_id: 2,
          manager_id: 1,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Ashley",
          last_name: "Rodriguez",
          role_id: 2,
          manager_id: 1,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Kevin",
          last_name: "Tupik",
          role_id: 3,
          manager_id: null,
          is_manager: true,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Kunal",
          last_name: "Singh",
          role_id: 4,
          manager_id: 2,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Malia",
          last_name: "Brown",
          role_id: 4,
          manager_id: 2,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "John",
          last_name: "Belinger",
          role_id: 4,
          manager_id: 2,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Pete",
          last_name: "Bolotin",
          role_id: 5,
          manager_id: null,
          is_manager: true,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Alex",
          last_name: "Crown",
          role_id: 6,
          manager_id: 3,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Matt",
          last_name: "Jacobson",
          role_id: 6,
          manager_id: 3,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Employees", null, {});
  },
};
