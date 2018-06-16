const mongoose = require('mongoose');

const { Schema } = mongoose;

const listSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  __v: { type: Number, select: false },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

module.exports = mongoose.model('List', listSchema);
