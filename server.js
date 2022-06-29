const express = require("express");
const routes = require('./routes');
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const server = express();
server.use(bodyParser.json());
server.use(logger('dev'));
server.use('/api', routes);

const db = require("./config/connection");

const initServer = async () => {
  console.log("Testing the database connection..");

  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    server.listen(PORT, () => {
      console.log(`Server is up and running at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.original);
  }
};

initServer();
