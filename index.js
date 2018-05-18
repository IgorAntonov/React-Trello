// If heroku fails, use preload ( see docs)
require('dotenv').config();

require('./server/server');

// Respond to req when signup was ok
// Err when req has no needed params
// JWT?
// Google strategy
// Back to client
