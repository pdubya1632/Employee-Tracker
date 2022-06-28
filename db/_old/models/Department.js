// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Department extends Model {}

// Department.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'department',
//   }
// );

// module.exports = Department;

const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Department = sequelize.define(
    "Department",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Department;
};
