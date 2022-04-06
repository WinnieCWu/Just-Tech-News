const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

//set as true, since user can't access dashboard unless logged in
router.get('/', (req, res) => {
    res.render('dashboard', { loggedIn: true });
  });

module.exports = router;