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

/**
 * Import Sequelize.
 */
 const Sequelize = require("sequelize");

 /**
  * Create a Sequelize instance. This can be done by passing
  * the connection parameters separately to the Sequelize constructor.
  */
 const sequelize = new Sequelize("company_db", "", "", {
     host: "127.0.0.1",
     dialect: "postgres"
 });
 
 /**
  * Export the Sequelize instance. This instance can now be 
  * used in the app.js file to authenticate and establish a database connection.
  */
 module.exports = sequelize;