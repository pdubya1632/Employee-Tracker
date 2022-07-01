const { prompt } = require("enquirer");
const yosay = require("yosay");
require("console.table");

const db = require("../models");

/*------*/

const addEmployee = async () => {
  prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the new Employee's first name?",
      validate: function validateFirstName(name) {
        return name !== "";
      },
    },
    {
      type: "input",
      name: "last_name",
      message: "What is their last name?",
      validate: function validateLastName(name) {
        return name !== "";
      },
    },
    {
      type: "select",
      name: "role",
      message: "What is their Role in the company?",
      choices: function listRoles() {
        return db.role.findAll();
      },
    },
    {
      type: "confirm",
      name: "isManager",
      message: (answers) => `Is ${answers.first_name} a Manager?`,
    },
    {
      type: "select",
      name: "manager",
      message: "Who is their Manager?",
      choices: [{ message: "manager1" }, { message: "manager2" }],
      when: (answers) => answers.isManager === true,
    },
  ]).then((res) => {
    console.log(res.first_name + " has been added.");
  });
};

const listEmployees = async () => {
  const emp = await db.employee.findAll({ raw: true });
  const result = emp.map(a => {return `${a.first_name} ${a.last_name}`});
  return result;
}

const updateEmployeeRole = async () => {
  prompt([
    {
      type: "select",
      name: "employee",
      message: "Which Employee?",
      choices: listEmployees(),
    },
    {
      type: "select",
      name: "role",
      message: "What is their new Role?",
      choices: function listRoles() {
        return db.role.findAll();
      },
    },
  ]).then((res) => {
    console.log(res + "has been added.");
  });
};

const addRole = async () => {
  prompt([
    {
      message: "What is the new Role called?",
      type: "input",
      name: "title",
      validate: function validateRole(name) {
        return name !== "";
      },
    },
    {
      message: "Which Department does the new Role belong to?",
      type: "select",
      name: "department",
      choices: function listDepartments() {
        return db.department.findAll();
      },
    },
  ]).then((res) => {
    console.log(res.title + " has been added to " + res.department);
  });
};

const addDepartment = async () => {
  prompt([
    {
      message: "What is the new Department called?",
      type: "input",
      name: "title",
      validate: function validateDepartment(name) {
        return name !== "";
      },
    },
  ]).then((res) => {
    console.log(res.title + " has been added");
  });
};

const followUp = async (res) => {
  let output;

  console.log(res.command);

  switch (res.command) {
    case "viewAllEmployees":
      output = await db.employee.findAll({ raw: true });
      console.table(output);
      break;
    case "addEmployee":
      addEmployee();
      break;
    case "updateEmployeeRole":
      updateEmployeeRole();
      break;
    case "viewAllRoles":
      output = await db.role.findAll({ raw: true });
      console.table(output);
      break;
    case "addRole":
      addRole();
      break;
    case "viewAllDepartments":
      output = await db.department.findAll({ raw: true });
      console.table(output);
      break;
    case "addDepartment":
      addDepartment();
      break;
    default:
      console.log(
        "Thank you for using the WORLD CORP Employee Database. Goodbye."
      );
  }
};

const startQuestion = async () => {
  prompt({
    type: "select",
    name: "command",
    message: "Execute your command:",
    header: yosay("Welcome to the WORLD CORP Employee Database"),
    choices: [
      { message: "View All Employees", value: "viewAllEmployees" },
      { message: "Add Employee", value: "addEmployee" },
      { message: "Update Employee Role", value: "updateEmployeeRole" },
      // new Separator(),
      { message: "View All Roles", value: "viewAllRoles" },
      { message: "Add New Role", value: "addRole" },
      // new Separator(),
      { message: "View All Departments", value: "viewAllDepartments" },
      { message: "Add New Department", value: "addDepartment" },
      // new Separator(),
      { message: "Quit", value: "quit" },
    ],
  }).then((res) => {
    followUp(res);
  });
};

startQuestion();
