const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const LocalUser = require('../models/LocalUser');
const GoogleUser = require('../models/GoogleUser');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const localUser = await LocalUser.findById(id);
  const googleUser = await GoogleUser.findById(id);
  if (localUser) {
    done(null, localUser);
  } else if (googleUser) {
    done(null, googleUser);
  }
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (username, password, done) => {
  const user = await LocalUser.findOne({ email: username }).exec();
  if (!user) {
    return done(null, false);
  }
  if (!user.validatePassword(password)) {
    return done(null, false);
  }
  return done(null, user);
}));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await GoogleUser.findOne({ googleId: profile.id }).exec();
  if (existingUser) {
    return done(null, existingUser);
  }
  const user = await new GoogleUser({ googleId: profile.id, name: profile.displayName }).save();
  return done(null, user);
}));
