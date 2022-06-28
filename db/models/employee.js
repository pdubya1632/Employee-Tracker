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
      Employee.associate = function (models) {
        Employee.belongsTo(models.role);
      };
    }
  }
  Employee.init({
    id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    salary: DataTypes.DECIMAL,
    manager_id: DataTypes.INTEGER,
    is_manager: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};