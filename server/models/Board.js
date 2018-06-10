const mongoose = require('mongoose');

const listSchema = require('./List');

const { Schema } = mongoose;

const boardSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  author: { type: Schema.Types.ObjectId },
  lists: [listSchema]
});

module.exports = mongoose.model('Board', boardSchema);
