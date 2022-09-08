'use strict';

module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define(
    'Department',
    { name: Sequelize.STRING },
    { timestamps: false }
  );

  return Department;
};
