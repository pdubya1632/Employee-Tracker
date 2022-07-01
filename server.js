const db = require("./models");
const controller = require("./controllers/department.controller");
const run = async () => {
    const dept1 = await controller.addDepartment(
        {
        title: "Service",
      });
};
// db.sequelize.sync();
db.sequelize.sync().then(() => {
  console.log("Add to db.");
  run();
});