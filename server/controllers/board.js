const mongoose = require('mongoose');

const LocalUser = require('../models/LocalUser');
const GoogleUser = require('../models/GoogleUser');
const Board = require('../models/Board');

exports.createBoard = async (req, res) => {
  try {
    const { user } = req;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        status: 'error',
        message: 'No board name is provided'
      });
    }

    const newBoard = await new Board({
      _id: mongoose.Types.ObjectId(),
      name,
      author: user.id
    });

    if (user.email) {
      await newBoard.save();
      await LocalUser.findOneAndUpdate(
        { _id: user.id },
        { $push: { boards: newBoard._id } }
      );
      return res.status(200).json({
        status: 'ok'
      });
    }

    if (user.googlId) {
      await newBoard.save();
      await GoogleUser.findOneAndUpdate(
        { _id: user.id },
        { $push: { boards: newBoard._id } }
      );
      return res.status(200).json({
        status: 'ok'
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
