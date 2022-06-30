const { Employee, Department, Role } = require("../db/models");

/*
    LIST, CREATE, UPDATE EMPLOYEE
*/
const viewEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({});
    return res.status(201).json({
      employees
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    return res.status(201).json({
      newEmployee
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateEmployeeRole = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Employee.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedEmployee = await Employee.findOne({ where: { id: id } });
      return res.status(200).json({ employee: updatedEmployee });
    }
    throw new Error("Employee not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/*
    LIST, CREATE ROLE
*/
const viewRoles = async (req, res) => {
    try {
      const roles = await Roles.findAll({});
      return res.status(201).json({
        roles
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

const createRole = async (req, res) => {
  try {
    const newRole = await Role.create(req.body);
    return res.status(201).json({
      newRole,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/*
    LIST, CREATE DEPARTMENT
*/
const viewDepartments = async (req, res) => {
    try {
      const departments = await Departments.findAll({});
      return res.status(201).json({
        departments
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

const createDepartment = async (req, res) => {
  try {
    const newDepartment = await Department.create(req.body);
    return res.status(201).json({
      newDepartment,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  viewEmployees,
  createEmployee,
  updateEmployeeRole,
  viewRoles,
  createRole,
  viewDepartments,
  createDepartment
};
