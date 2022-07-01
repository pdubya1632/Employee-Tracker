module.exports = (sequelize, Sequelize) => {
  
  const Department = sequelize.define(
    "Department",
    { title: Sequelize.STRING },
    { timestamps: false }
  );

  return Department;
};
