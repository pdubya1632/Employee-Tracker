const { Department } = require("../models");

module.exports = {
    
  findAll: async () => {
    return await Department.findAll({ raw: true });
  },

  findAllChoices: async () => {
    return await Department.findAll()
      .then((res) => {
        const shortList = res.map((record) => record.toJSON());

        let choices = shortList.reduce((acc, cur) => {
          let { id, title } = cur;
          let ex = acc.find((x) => x.id === id);
          if (!ex) {
            ex = { id, title };
            acc.push(ex);
          }
          return acc;
        }, []);

        choices = choices.map(function (obj) {
          obj["value"] = obj["id"];
          delete obj["id"];
          obj["message"] = obj["title"];
          delete obj["title"];
          return obj;
        });

        return choices;
      })
      .catch((err) => {
        console.log(">> Error while getting all Departments: ", err);
      });
  },

  create: async (title) => {
    return await Department.create({
      title: title,
    })
      .then((res) => {
        console.log(">> Created Department: " + JSON.stringify(res, null, 4));
        return res;
      })
      .catch((err) => {
        console.log(">> Error while creating Department: ", err);
      });
  },
};

// const listDepartments = async (model) => {
//     let data;

//     switch (model) {
//       case "employees":
//         data = await db.employees.findAll();
//         break;
//       case "managers":
//         data = await db.employees.findAll({ where: { is_manager: true } });
//         break;
//       case "roles":
//         data = await db.roles.findAll();
//         break;
//       case "departments":
//         data = await db.departments.findAll();
//         break;
//       default:
//         console.log("model not found");
//         break;
//     }

//     const shortList = data.map((record) => record.toJSON());

//     let choices = shortList.reduce((acc, cur) => {
//       let { id, full_name } = cur;
//       let ex = acc.find((x) => x.id === id);
//       if (!ex) {
//         ex = { id, full_name };
//         acc.push(ex);
//       }
//       return acc;
//     }, []);

//     choices = choices.map(function (obj) {
//       obj["value"] = obj["id"];
//       delete obj["id"];
//       obj["message"] = obj["full_name"];
//       delete obj["full_name"];
//       return obj;
//     });

//     return choices;
//   };

//   exports.addDepartment = (department) => {
//     return Department.create({
//       title: department.title,
//     })
//       .then((newDepartment) => {
//         console.log(">> Created role: " + JSON.stringify(newDepartment, null, 4));
//         return newDepartment;
//       })
//       .catch((err) => {
//         console.log(">> Error while creating role: ", err);
//       });
//   };
