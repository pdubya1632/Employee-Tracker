const enquirer = require("enquirer");
const yosay = require("yosay");

const startChoices = [
  { message: "View All Employees", value: "viewAllEmployees" },
  { message: "Add Employee", value: "addEmployee" },
  { message: "Update Employee Role", value: "updateEmployeeRole" },
  { message: "View All Roles", value: "viewAllRoles" },
  { message: "Add New Role", value: "addRole" },
  { message: "View All Departments", value: "viewAllDepartments" },
  { message: "Add New Department", value: "addDepartment" },
  { message: "Quit", value: "quit" },
];

const runCli = async () => {
  let currentPrompt;
  let selection;
  let quit = false;

  while (!quit) {
    currentPrompt?.clear();

    if (!selection) {
      currentPrompt = new enquirer.Select({
        name: "command",
        message: "Execute your command:",
        header: yosay("Welcome to the WORLD CORP Employee Database"),
        choices: [...startChoices],
      });
    } else if (selection === "viewAllEmployees") {
      console.log("view all employees");
    } else if (selection === "addEmployee") {
      currentPrompt = new enquirer.Form({
        name: "employee",
        message: "Please provide their name:",
        choices: [
          { name: "first_name", message: "First Name" },
          { name: "last_name", message: "Last Name" },
        ],
      });
    } else if (selection === "updateEmployeeRole") {
      console.log("update employee role");
    } else if (selection === "viewAllRoles") {
      console.log("view all roles");
    } else if (selection === "addRole") {
      console.log("add new roles");
    } else if (selection === "viewDepartments") {
      console.log("view all departments");
    } else if (selection === "addDepartment") {
      currentPrompt = new enquirer.Input({
        message: "What is the new Department called?",
      });
    } else {
      quit = true;
      break;
    }

    selection = await currentPrompt.run();
    console.log("current selection: " + selection);
    // return;
  }
  console.log("Thanks for using the cli!");
  // return;
};

runCli();
