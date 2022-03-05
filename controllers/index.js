const router = require('express').Router();

const apiRoutes = require('./api');
const webRoutes = require('./web');

router.use('/', webRoutes);
router.use('/api', apiRoutes);

module.exports = router;
