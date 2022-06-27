const enquirer = require('enquirer');
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const User = require(`${__dirname}/models/user`)(sequelize)

User.findAll().then((users) => {
  console.log(users)
  sequelize.close()
})