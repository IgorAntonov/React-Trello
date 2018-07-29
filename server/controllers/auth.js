const LocalUser = require('../models/LocalUser');

exports.localSignup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'You must provide name, email and password for successful auth'
    });
  }
  try {
    const existingUser = await LocalUser.findOne({ email }).exec();
    if (existingUser) {
      return res.status(422).json({
        error: 'This email already exists'
      });
    }

    const user = await new LocalUser({
      name,
      email
    });
    user.password = user.generateHash(password);
    await user.save();
    return next();
  } catch (err) {
    return res.status(500).json({
      message: 'Something broke',
      err
    });
  }
};

exports.logout = (req, res) => {
  const { user } = req;
  if (!user) {
    res.status(401).json({
      message: 'No logged-in user currently'
    });
  }
  req.logout();
  res.status(200).json({
    message: 'ok',
    user
  });
};

exports.currentUser = (req, res) => {
  const { user } = req;
  if (!user) {
    res.status(401).json({
      message: 'No logged-in user currently'
    });
  }
  res.status(200).send(user);
};
