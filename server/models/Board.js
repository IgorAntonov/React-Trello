const mongoose = require('mongoose');

const { Schema } = mongoose;

const boardSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  author: { type: Schema.Types.ObjectId },
  lists: [{ type: Schema.Types.ObjectId, ref: 'List' }]
});

module.exports = mongoose.model('Board', boardSchema);
