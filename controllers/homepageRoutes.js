const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered homepage Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/sign-up', async (req, res) => {
  // Send the rendered homepage Handlebars.js template back as the response
  res.render('sign-up');
});

module.exports = router;
