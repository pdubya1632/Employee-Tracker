const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const dbConfig = require('../config/db.config.js');

const filebasename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    logging: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    const returnFile =
      file.indexOf('.') !== 0 &&
      file !== filebasename &&
      file.slice(-3) === '.js';
    return returnFile;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
