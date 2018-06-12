const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, default: 'no description' },
  comments: [{
    body: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true }
  }]
});

module.exports = mongoose.model('Card', cardSchema);
