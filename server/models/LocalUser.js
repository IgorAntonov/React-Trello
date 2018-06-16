const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userLocalSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  theme: { type: String, required: true, default: 'default' },
  __v: { type: Number, select: false },
  boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }]
});

userLocalSchema.methods.generateHash = function generateHash(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

userLocalSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('LocalUser', userLocalSchema);
