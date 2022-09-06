'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.hasOne(models.Employee, {
        foreignKey: 'managerId',
        as: 'employee',
      });
      Employee.belongsTo(models.Role, {
        foreignKey: 'roleId',
        as: 'role',
      });
    }
  }

  Employee.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      full_name: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.first_name} ${this.last_name}`;
        },
        set(value) {
          throw new Error('Do not try to set the `full_name` value!');
        },
      },
      salary: DataTypes.DECIMAL,
      is_manager: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Employee',
    }
  );

  return Employee;
};
