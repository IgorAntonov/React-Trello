const express = require('express');
const passport = require('passport');

const router = express.Router();

const auth = require('../controllers/auth');

require('../services/passport');

router.post('/login', passport.authenticate('local'));

router.post('/signup', auth.localSignup, passport.authenticate('local'));

router.get('/logout', auth.logout);

router.get('/currentUser', auth.currentUser);

module.exports = router;
