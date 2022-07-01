module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    "Role",
    { title: Sequelize.STRING },
    { timestamps: false }
  );

  return Role;
};
