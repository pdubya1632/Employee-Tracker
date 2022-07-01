const db = require("../models");
const Employee = db.employees;
const Role = db.roles;
const Department = db.departments;

exports.findAll = (input) => {
    switch(input) {
        case "department":
            return Department.findAll().then((departments) => {
                return departments;
              });
        default:
            console.log("nothing to retrieve")
    }
    
  };

/*
EMPLOYEE FUNCTIONS
*/

/*
ROLE FUNCTIONS
*/

/*
DEPARTMENT FUNCTIONS
*/

exports.addDepartment = (department) => {
    return Department.create({
      title: department.title,
    })
      .then((tutorial) => {
        console.log(
          ">> Created department: " + JSON.stringify(department, null, 4)
        );
        return department;
      })
      .catch((err) => {
        console.log(">> Error while creating department: ", err);
      });
  };