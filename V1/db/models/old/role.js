'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Role.belongsTo(models.Department);
      // Role.belongsTo(models.Employee);
    }
  }
  Role.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    title: DataTypes.STRING,
    department_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Department',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Role;
};