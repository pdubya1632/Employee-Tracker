const { Employee, Department, Role } = require("../db/models");

// const listEmployees = async (req, res) => {
//   try {
//     const employees = await Employee.findAll({});
//     return res.status(201).json({
//       employees,
//     });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

const createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    return res.status(201).json({
        newEmployee,
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
  createEmployee,
  createRole,
  createDepartment
};
