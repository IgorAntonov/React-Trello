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

    if (user.googleId) {
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
      message: err.message
    });
  }
};

exports.deleteBoard = async (req, res) => {
  try {
    const { user } = req;
    const { boardId } = req.body;

    if (!boardId) {
      return res.status(400).json({
        status: 'error',
        message: 'No board id is provided'
      });
    }

    if (user.email) {
      await LocalUser.findOneAndUpdate(
        { _id: user.id },
        { $pull: { boards: boardId } }
      );
      await Board.deleteOne({ _id: boardId });

      return res.status(200).json({
        status: 'ok'
      });
    }

    if (user.googleId) {
      await GoogleUser.findOneAndUpdate(
        { _id: user.id },
        { $pull: { boards: boardId } }
      );
      await Board.deleteOne({ _id: boardId });

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
      message: err.message
    });
  }
};

exports.renameBoard = async (req, res) => {
  try {
    const { boardId, newName } = req.body;

    if (!boardId || !newName) {
      return res.status(400).json({
        status: 'error',
        message: 'No boards id or new name is provided'
      });
    }

    await Board.findOneAndUpdate(
      { _id: boardId },
      { name: newName }
    );

    return res.status(200).json({
      status: 'ok'
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.getUserBoards = async (req, res) => {
  try {
    const { user } = req;

    if (user.email) {
      const { boards } = await LocalUser.findById(user.id).populate('boards').exec();

      return res.status(200).json({
        status: 'ok',
        boards
      });
    }
    if (user.googleId) {
      const { boards } = await GoogleUser.findById(user.id).exec();

      return res.status(200).json({
        status: 'ok',
        boards
      });
    }

    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};
