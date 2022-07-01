module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define(
    "Employee",
    {
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      full_name: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${this.first_name} ${this.last_name}`;
        },
        set(value) {
          throw new Error('Do not try to set the `fullName` value!');
        }
      },
      salary: Sequelize.DECIMAL,
      is_manager: Sequelize.BOOLEAN,
      active: Sequelize.BOOLEAN
    },
    { timestamps: false }
  );

  return Employee;
};
