"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Employees',
      'manager_id',
      { 
        type: Sequelize.STRING,
        references: {
          model: 'Employees',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Employees", "manager_id");
  },
};
