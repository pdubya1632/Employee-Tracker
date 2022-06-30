// const Sequelize = require('sequelize');

// // Enable access to .env variables
// require('dotenv').config();

// // Use environment variables to connect to database
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: '127.0.0.1',
//     dialect: 'postgres',
//     port: 3306
//   }
// );

// module.exports = sequelize;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("company_db", "", "", {
  host: "127.0.0.1",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
