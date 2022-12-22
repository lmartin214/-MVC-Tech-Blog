const router = require('express').Router();
// const profileRoutes = require('./profileRoutes');
const userRoutes = require('./userRoutes')


router.use('/users', userRoutes);

module.exports = router;