const mongoose = require('mongoose');

const userGoogleSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  name: { type: String, required: true }
});

module.exports = mongoose.model('GoogleUser', userGoogleSchema);
