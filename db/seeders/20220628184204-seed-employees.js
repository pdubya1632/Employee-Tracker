"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Employees",
      [
        {
          first_name: "John",
          last_name: "Doe",
          is_manager: true,
          salary: 60000,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Mike",
          last_name: "Chan",
          salary: 70000,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Ashley",
          last_name: "Rodriguez",
          salary: 80000,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Kevin",
          last_name: "Tupik",
          salary: 90000,
          is_manager: true,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Kunal",
          last_name: "Singh",
          salary: 100000,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Malia",
          last_name: "Brown",
          salary: 110000,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "John",
          last_name: "Belinger",
          salary: 120000,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Pete",
          last_name: "Bolotin",
          salary: 130000,
          is_manager: true,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Alex",
          last_name: "Crown",
          salary: 140000,
          is_manager: false,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Matt",
          last_name: "Jacobson",
          salary: 150000,
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
