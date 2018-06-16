const mongoose = require('mongoose');

const { Schema } = mongoose;

const boardSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  author: { type: Schema.Types.ObjectId },
  __v: { type: Number, select: false },
  lists: [{ type: Schema.Types.ObjectId, ref: 'List' }]
});

module.exports = mongoose.model('Board', boardSchema);
