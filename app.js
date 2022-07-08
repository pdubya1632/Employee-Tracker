const { prompt } = require('enquirer');
const yosay = require('yosay');
const { Employee, Role, Department } = require('./controllers');

/* EMPLOYEE */

const addEmployee = async () => {
  prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "What is the new Employee's first name?",
      validate: function validateFirstName(name) {
        return name !== '';
      },
    },
    {
      type: 'input',
      name: 'last_name',
      message: (state) =>
        `What is ${state.answers.first_name}'s last name?`,
      validate: function validateLastName(name) {
        return name !== '';
      },
    },
    {
      type: 'select',
      name: 'roleId',
      message: (state) =>
        `What is ${state.answers.first_name}'s Role?`,
      choices: Role.findAllChoices(),
      result(name) {
        return this.map(name)[name];
      },
    },
    {
      type: 'input',
      name: 'salary',
      message: (state) =>
        `What is ${state.answers.first_name}'s yearly Salary?`,
    },
    {
      type: 'toggle',
      name: 'isManager',
      message: (state) => `Is ${state.answers.first_name} a Manager?`,
    },
    {
      type: 'select',
      name: 'managerId',
      message: 'Who is their Manager?',
      choices: Employee.findAllManagers(),
      skip() {
        if (this.state.answers.isManager) {
          return true;
        }
        return false;
      },
    },
  ]).then((res) => {
    Employee.create(res).then(() => {
      askAgain();
    });
  });
};

const updateEmployeeRole = async () => {
  prompt([
    {
      type: 'select',
      name: 'employeeId',
      message: 'Which Employee?',
      choices: Employee.findAllChoices(),
      result(name) {
        return this.map(name)[name];
      },
    },
    {
      type: 'select',
      name: 'roleId',
      message: 'What is their new Role?',
      choices: Role.findAllChoices(),
      result(name) {
        return this.map(name)[name];
      },
    },
  ]).then((res) => {
    console.log(res);
    // Employee.updateRole(res.employeeId, res.roleId).then(() => {
    //   askAgain();
    // });
  });
};

/* ROLE */

const addRole = async () => {
  prompt([
    {
      message: 'What is the new Role called?',
      type: 'input',
      name: 'title',
      validate: function validateRole(name) {
        return name !== '';
      },
    },
    {
      message: 'Which Department does the new Role belong to?',
      type: 'select',
      name: 'departmentId',
      choices: Department.findAllChoices(),
    },
  ]).then((res) => {
    Role.create(res.title, res.departmentId).then(() => {
      askAgain();
    });
  });
};

/* DEPARTMENT */

const addDepartment = async () => {
  prompt([
    {
      message: 'What is the new Department called?',
      type: 'input',
      name: 'title',
      validate: function validateDepartment(name) {
        return name !== '';
      },
    },
  ]).then((res) => {
    Department.create(res.title).then(() => {
      askAgain();
    });
  });
};

/* APP */

const askAgain = async () => {
  prompt([
    {
      message: 'Would you like to execute another command?',
      type: 'toggle',
      name: 'continue',
    },
  ]).then((res) => {
    if (res.continue) {
      startQuestion();
    } else {
      console.log(
        'Thank you for using the WORLD CORP Employee Database. Goodbye.'
      );
      process.exit();
    }
  });
};

const commandRouter = async (res) => {
  let data;

  switch (res.command) {
    case 'viewAllEmployees':
      data = await Employee.findAll();
      console.table(data);
      askAgain();
      break;
    case 'addEmployee':
      addEmployee();
      break;
    case 'updateEmployeeRole':
      updateEmployeeRole();
      break;
    case 'viewAllRoles':
      data = await Role.findAll();
      console.table(data);
      askAgain();
      break;
    case 'addRole':
      addRole();
      break;
    case 'viewAllDepartments':
      data = await Department.findAll();
      console.table(data);
      askAgain();
      break;
    case 'addDepartment':
      await addDepartment();
      break;
    default:
      console.log(
        'Thank you for using the WORLD CORP Employee Database. Goodbye.'
      );
      process.exit();
  }
};

const startQuestion = async () => {
  prompt({
    type: 'select',
    name: 'command',
    message: 'Execute your command:',
    header: yosay('Welcome to the WORLD CORP Employee Database'),
    choices: [
      { message: 'View All Employees', value: 'viewAllEmployees' },
      { message: 'Add Employee', value: 'addEmployee' },
      {
        message: 'Update Employee Role',
        value: 'updateEmployeeRole',
      },
      { message: '-', role: 'separator' },
      { message: 'View All Roles', value: 'viewAllRoles' },
      { message: 'Add New Role', value: 'addRole' },
      { message: '-', role: 'separator' },
      {
        message: 'View All Departments',
        value: 'viewAllDepartments',
      },
      { message: 'Add New Department', value: 'addDepartment' },
      { message: '-', role: 'separator' },
      { message: 'QUIT', value: 'quit' },
    ],
  }).then((res) => {
    commandRouter(res);
  });
};

startQuestion();
