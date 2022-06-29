const { Employee, Department, Role } = require("../db/models");

const listEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({});
        return res.status(201).json({
            employees,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await Employee.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createUser,
    listEmployees
}