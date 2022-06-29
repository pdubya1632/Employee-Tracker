'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Employee.hasOne(models.Role);
      // Employee.hasOne(models.Department);
      // Employee.belongsTo(models.Department, {foreignKey: 'id', as: 'department_id'});
      // Employee.belongsTo(models.Role, {foreignKey: 'id', as: 'role_id'});
      // Employee.belongsTo(models.Employee, {foreignKey: 'id', as: 'manager_id'});
    }
  }
  Employee.init({
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    role_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Role',
        key: 'id'
      }
    },
    salary: DataTypes.DECIMAL,
    manager_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Employee',
        key: 'id'
      }
    },
    is_manager: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employee;
};