const mongoose = require('mongoose');

const { Schema } = mongoose;

const userGoogleSchema = Schema({
  googleId: { type: String, required: true },
  name: { type: String, required: true },
  theme: { type: String, required: true, default: 'default' },
  boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }]
});

module.exports = mongoose.model('GoogleUser', userGoogleSchema);
