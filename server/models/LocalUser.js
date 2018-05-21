const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userLocalSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

userLocalSchema.methods.generateHash = function generateHash(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

userLocalSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('LocalUser', userLocalSchema);
