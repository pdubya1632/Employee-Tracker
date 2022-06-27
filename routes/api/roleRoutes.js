const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Employee, Department, Role } = require('../../models');

// GET all roles
router.get('/', async (req, res) => {
  try {
    const roleData = await Role.findAll({
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
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single role
router.get('/:id', async (req, res) => {
  try {
    const roleData = await Role.findByPk(req.params.id, {
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

    if (!roleData) {
      res.status(404).json({ message: 'No employee found with that id' });
      return;
    }

    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


