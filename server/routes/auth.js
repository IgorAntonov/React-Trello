const express = require('express');
const passport = require('passport');

const router = express.Router();

const User = require('../models/User');

require('../services/passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.body);
});

router.post('/signup', async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(422).json({
        error: 'This email already exists'
      });
    }

    const user = await new User({
      name,
      email,
      password
    }).save();
    next();
  } catch (err) {
    return res.status(500).json({ err });
  }
}, passport.authenticate('local'));

router.get('/logout', (req, res) => {
  req.logout();
  res.end();
});

router.get('/currentUser', (req, res) => {
  res.send(req.user);
});

module.exports = router;
