const express = require("express");
const routes = require('./routes');
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', routes);

const db = require("./config/connection");

const initApp = async () => {
  console.log("Testing the database connection..");

  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    app.listen(PORT, () => {
      console.log(`Server is up and running at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.original);
  }
};

initApp();
