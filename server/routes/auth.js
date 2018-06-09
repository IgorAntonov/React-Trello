const express = require('express');
const passport = require('passport');

const auth = require('../controllers/auth');
require('../services/passport');

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local'),
  auth.currentUser
);

router.post(
  '/signup',
  auth.localSignup,
  passport.authenticate('local'),
  auth.currentUser
);

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => res.redirect('/')
);

router.get('/logout', auth.logout);

router.get('/currentUser', auth.currentUser);

module.exports = router;
