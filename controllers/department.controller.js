const db = require("../models");
const Department = db.departments;

exports.findAll = () => {
  return Department.findAll().then((departments) => {
    return departments;
  });
};

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
