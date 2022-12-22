//Imported 
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');


//API routes
router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;