const mongoose = require('mongoose');

const List = require('../models/List');
const Card = require('../models/Card');

exports.createCard = async (req, res) => {
  try {
    const { listId, name } = req.body;

    if (!listId || !name) {
      return res.status(400).json({
        status: 'error',
        message: 'No list id or card name is provided'
      });
    }
    const newCard = await new Card({
      _id: mongoose.Types.ObjectId(),
      name
    }).save();
    await List.findOneAndUpdate(
      { _id: listId },
      { $push: { cards: newCard._id } }
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

exports.renameCard = async (req, res) => {
  try {
    const { cardId, newName } = req.body;

    if (!cardId || !newName) {
      return res.status(400).json({
        status: 'error',
        message: 'No card id or new card name is provided'
      });
    }

    await Card.findOneAndUpdate(
      { _id: cardId },
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

exports.addDescription = async (req, res) => {
  try {
    const { cardId, description } = req.body;

    if (!cardId || !description) {
      return res.status(400).json({
        status: 'error',
        message: 'No card id or description is provided'
      });
    }

    await Card.findOneAndUpdate(
      { _id: cardId },
      { description }
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

exports.addComment = async (req, res) => {
  try {
    const { user } = req;
    const { cardId, comment, createAt } = req.body;

    if (!cardId || !comment || !createAt) {
      return res.status(400).json({
        status: 'error',
        message: 'No card id, comment or create date is provided'
      });
    }
    const newComment = {
      body: comment,
      author: user.name,
      createAt
    };
    await Card.findOneAndUpdate(
      { _id: cardId },
      { $push: { comments: { $each: [newComment], $position: 0 } } }
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

exports.deleteCard = async (req, res) => {
  try {
    const { cardId, listId } = req.body;

    if (!cardId || !listId) {
      return res.status(400).json({
        status: 'error',
        message: 'No card id or list id is provided'
      });
    }

    await Card.deleteOne({ _id: cardId });
    await List.findOneAndUpdate(
      { _id: listId },
      { $pull: { cards: cardId } }
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
