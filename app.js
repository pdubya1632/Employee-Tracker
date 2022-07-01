const { prompt } = require("enquirer");
const yosay = require("yosay");

const db = require("./models");
const controller = require("./controllers");

/*------*/

const createEmployee = async () => {
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
        return db.roles.findAll();
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
      when: (answers) => answers.isManager === false,
    },
  ]).then((res) => {
    console.log(res.first_name + " has been added.");
    askAgain();
  });
};

const listEmployees = async () => {
  const emp = await db.employees.findAll({ raw: true });
  const result = emp.map((a) => {
    return `${a.first_name} ${a.last_name}`;
  });
  return result;
};

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
        return db.roles.findAll();
      },
    },
  ]).then((res) => {
    console.log(res.employee + " is now a " + res.role);
    askAgain();
  });
};

const createRole = async () => {
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
      name: "departmentId",
      choices: function listDepartments() {
        return db.departments.findAll();
      },
    },
  ]).then((res) => {
    controller.addRole({ title: res.title, departmentId: res.departmentId }).then(() => {
      askAgain();
    });
  });
};

const createDepartment = async () => {
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
    controller.addDepartment({ title: res.title }).then(() => {
      askAgain();
    });
  });
};

const askAgain = async () => {
  prompt([
    {
      message: "Would you like to execute another command?",
      type: "toggle",
      name: "continue",
    },
  ]).then((res) => {
    if (res.continue) {
      startQuestion();
    } else {
      console.log(
        "Thank you for using the WORLD CORP Employee Database. Goodbye."
      );
      process.exit();
    }
  });
};

const followUp = async (res) => {
  let output;

  console.log(res.command);

  switch (res.command) {
    case "viewAllEmployees":
      output = await db.employees.findAll({ raw: true });
      console.table(output);
      askAgain();
      break;
    case "createEmployee":
      createEmployee();
      break;
    case "updateEmployeeRole":
      updateEmployeeRole();
      break;
    case "viewAllRoles":
      output = await db.roles.findAll({ raw: true });
      console.table(output);
      askAgain();
      break;
    case "createRole":
      createRole();
      break;
    case "viewAllDepartments":
      output = await db.departments.findAll({ raw: true });
      console.table(output);
      askAgain();
      break;
    case "createDepartment":
      createDepartment();
      break;
    default:
      console.log(
        "Thank you for using the WORLD CORP Employee Database. Goodbye."
      );
      process.exit();
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
      { message: "Add Employee", value: "createEmployee" },
      { message: "Update Employee Role", value: "updateEmployeeRole" },
      // new Separator(),
      { message: "View All Roles", value: "viewAllRoles" },
      { message: "Add New Role", value: "createRole" },
      // new Separator(),
      { message: "View All Departments", value: "viewAllDepartments" },
      { message: "Add New Department", value: "createDepartment" },
      // new Separator(),
      { message: "Quit", value: "quit" },
    ],
  }).then((res) => {
    followUp(res);
  });
};

startQuestion();
