const User = require('../models/User');

exports.localSignup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(422).json({
        error: 'This email already exists'
      });
    }

    const user = await new User({
      name,
      email
    });
    user.password = user.generateHash(password);
    await user.save();
    return next();
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.logout = (req, res) => {
  req.logout();
  res.end();
};

exports.currentUser = (req, res) => {
  res.send(req.user);
};
