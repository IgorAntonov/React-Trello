const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = Schema({
  title: { type: String, required: true },
  entries: [{
    name: { type: String, required: true },
    description: { type: String },
    comments: [{ type: String }]
  }]
});
