const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Employee, Department, Role } = require('../../models');

// GET all employees
router.get('/', async (req, res) => {
  try {
    const empData = await Employee.findAll({
      include: [{ model: Department }, { model: Role }],
    //   attributes: {
    //     include: [
    //       [
    //         // Use plain SQL to add up the total mileage
    //         sequelize.literal(
    //           '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
    //         ),
    //         'totalMileage',
    //       ],
    //     ],
    //   },
    });
    res.status(200).json(empData);
    printTable(empData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single employee
router.get('/:id', async (req, res) => {
  try {
    const empData = await Employee.findByPk(req.params.id, {
        include: [{ model: Department }, { model: Role }],
    //   attributes: {
    //     include: [
    //       [
    //         // Use plain SQL to add up the total mileage
    //         sequelize.literal(
    //           '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
    //         ),
    //         'totalMileage',
    //       ],
    //     ],
    //   },
    });

    if (!empData) {
      res.status(404).json({ message: 'No employee found with that id' });
      return;
    }

    res.status(200).json(empData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


