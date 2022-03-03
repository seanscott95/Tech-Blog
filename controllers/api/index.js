const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboard = require('./dashboardRoutes');

router.use('/users', userRoutes);
router.use('/dashboard', dashboard);

module.exports = router;
