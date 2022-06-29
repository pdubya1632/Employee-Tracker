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

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await User.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedEmployee = await User.findOne({ where: { id: id } });
      return res.status(200).json({ employee: updatedEmployee });
    }
    throw new Error("Employee not found");
  } catch (error) {
    return res.status(500).send(error.message);
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
  updateEmployee,
  createRole,
  createDepartment,
};
