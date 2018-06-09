const LocalUser = require('../models/LocalUser');
const GoogleUser = require('../models/GoogleUser');

exports.setTheme = async (req, res) => {
  try {
    const { user } = req;
    const { theme } = req.body;
    if (!theme) {
      return res.status(400).json({
        status: 'error',
        message: 'No theme field is provided'
      });
    }

    if (user.googleId) {
      await GoogleUser.findOneAndUpdate(
        { googleId: user.googleId },
        { theme }
      );
      return res.status(200).json({
        status: 'ok',
        theme
      });
    }

    if (user.email) {
      await LocalUser.findByIdAndUpdate(
        { _id: user.id },
        { theme }
      );
      return res.status(200).json({
        status: 'ok',
        theme
      });
    }

    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      error: err
    });
  }
};
