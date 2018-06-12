const mongoose = require('mongoose');

const { Schema } = mongoose;

const listSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  entries: [{
    name: { type: String, required: true },
    description: { type: String },
    comments: [{ type: String }]
  }]
});

module.exports = mongoose.model('List', listSchema);
