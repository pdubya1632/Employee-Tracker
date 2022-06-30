const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('You, dear user, have reached the root.'));

router.get('/employees', controllers.viewEmployees);
router.post('/employees', controllers.createEmployee);
router.put('/employees/:id', controllers.updateEmployeeRole);
router.get('/roles', controllers.viewRoles);
router.post('/roles', controllers.createRole);
router.get('/departments', controllers.viewDepartments);
router.post('/departments', controllers.createDepartment);

module.exports = router;