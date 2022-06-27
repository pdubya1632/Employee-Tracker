const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Employee, Department, Role } = require('../../models');

// GET all departments
router.get('/', async (req, res) => {
  try {
    const deptData = await Department.findAll({
      include: [{ model: Employee }, { model: Role }],
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
    res.status(200).json(deptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single department
router.get('/:id', async (req, res) => {
  try {
    const deptData = await Department.findByPk(req.params.id, {
        include: [{ model: Employee }, { model: Role }],
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

    if (!deptData) {
      res.status(404).json({ message: 'No employee found with that id' });
      return;
    }

    res.status(200).json(deptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


