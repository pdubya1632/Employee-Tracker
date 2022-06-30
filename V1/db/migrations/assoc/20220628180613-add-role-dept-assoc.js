"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Roles',
      'department_id',
      { 
        type: Sequelize.STRING,
        references: {
          model: 'Departments',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Roles", "department_id");
  },
};
