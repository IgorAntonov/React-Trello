const mongoose = require('mongoose');

const { Schema } = mongoose;

const listSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

module.exports = mongoose.model('List', listSchema);
