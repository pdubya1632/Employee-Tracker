"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Employees',
      'role_id',
      { 
        type: Sequelize.STRING,
        references: {
          model: 'Roles',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Employees", "role_id");
  },
};