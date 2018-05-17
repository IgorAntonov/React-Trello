const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id).exec();
  done(null, user);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (username, password, done) => {
  const user = await User.findOne({ email: username }).exec();
  if (!user) {
    return done(null, false);
  }
  if (!(user.password === password)) {
    return done(null, false);
  }
  return done(null, user);
}));
