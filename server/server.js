const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const themeRoutes = require('./routes/theme');
const boardRoutes = require('./routes/board');
const listRoutes = require('./routes/list');
const cardRoutes = require('./routes/card');

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI)
  .catch(err => console.log(`Unable to connect to the mongodb instance. Error: ${err}`));


const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use('/api/theme', themeRoutes);
app.use('/api/board', boardRoutes);
app.use('/api/list', listRoutes);
app.use('/api/card', cardRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

module.exports = app;
