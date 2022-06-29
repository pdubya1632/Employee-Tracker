const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

// router.post('/employees', controllers.createUser)s;
router.get('/employees', controllers.listEmployees);

module.exports = router;