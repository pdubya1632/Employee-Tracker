const router = require('express').Router();

const deptRoutes = require('./deptRoutes');
const roleRoutes = require('./roleRoutes');
const empRoutes = require('./empRoutes');

router.use('/departments', deptRoutes);
router.use('/roles', roleRoutes);
router.use('/employees', empRoutes);

module.exports = router;
