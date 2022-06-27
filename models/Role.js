// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Role extends Model {}

// Role.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//     department_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'department',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'role',
//   }
// );

// module.exports = Role;

const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Role = sequelize.define(
    "Role",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "department",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Role;
};
