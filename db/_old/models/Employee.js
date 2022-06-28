// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Employee extends Model {}

// Employee.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     first_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     role_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Role',
//         key: 'id',
//       },
//     },
//     salary: {
//       type: DataTypes.DECIMAL,
//       allowNull: false,
//     },
//     manager_id: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'Employee',
//         key: 'id',
//       },
//     },
//     is_manager: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     active: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     date_updated: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "employee",
//   }
// );

// module.exports = Employee;

const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Employee = sequelize.define("Employee", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type:Sequelize.STRING,
      allowNull: false,
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Role',
        key: 'id',
      },
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Employee',
        key: 'id',
      },
    },
    is_manager: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });
  return Employee;
};