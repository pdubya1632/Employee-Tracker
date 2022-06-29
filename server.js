const express = require("express");
const app = express();
const port = 3000;
 
const db = require("./config/connection");

const { Employee, Department, Role } = require('./db/models');

app.get("/api/employee", (req, res, next) => {
     Employee.findAll({
     }).then((result) => {
        return res.json(result);
    }).catch((error) => {
        console.log(error);
        return res.json({
            message: "Unable to create a record!",
        });
    });
});

 /**
  * Create a anonymous function to establish the database connection.
  * After the connection is established, start the server.
  */
 const initApp = async () => {
     console.log("Testing the database connection..");
     /**
      * Test the connection.
      * You can use the .authenticate() function to test if the connection works.
      */
     try {
         await db.authenticate();
         console.log("Connection has been established successfully.");
 
         /**
          * Start the web server on the specified port.
          */
         app.listen(port, () => {
             console.log(`Server is up and running at: http://localhost:${port}`);
         });
     } catch (error) {
         console.error("Unable to connect to the database:", error.original);
     }
 };
 
initApp();