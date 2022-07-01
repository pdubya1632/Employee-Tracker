const db = require("../models");
const Role = db.roles;

exports.findAll = () => {
    return Role.findAll().then((roles) => {
      return roles;
    });
  };
  
  exports.addRole = (role) => {
    return Role.create({
      title: role.title,
      departmentId: role.departmentId,
    })
      .then((tutorial) => {
        console.log(
          ">> Created role: " + JSON.stringify(role, null, 4)
        );
        return role;
      })
      .catch((err) => {
        console.log(">> Error while creating role: ", err);
      });
  };