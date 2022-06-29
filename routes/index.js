const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('You, dear user, have reached the root.'));

// router.post('/employees', controllers.createUser);
router.get('/employees', controllers.listEmployees);
router.post('/employees', controllers.createEmployee);
router.put('/employees/:id', controllers.updateEmployee);
router.post('/roles', controllers.createRole);
router.post('/departments', controllers.createDepartment);

module.exports = router;