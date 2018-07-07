const mongoose = require('mongoose');

const Board = require('../models/Board');
const List = require('../models/List');

exports.createList = async (req, res) => {
  try {
    const { boardId, title } = req.body;

    if (!boardId || !title) {
      return res.status(400).json({
        status: 'error',
        message: 'No board id or list title is provided'
      });
    }

    const newList = await new List({
      _id: mongoose.Types.ObjectId(),
      title
    }).save();

    await Board.findOneAndUpdate(
      { _id: boardId },
      { $push: { lists: newList._id } }
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

exports.deleteList = async (req, res) => {
  try {
    const { boardId, listId } = req.body;

    if (!boardId || !listId) {
      return res.status(400).json({
        status: 'error',
        message: 'No board id or list id is provided'
      });
    }

    await List.deleteOne({ _id: listId });
    await Board.findOneAndUpdate(
      { _id: boardId },
      { $pull: { lists: listId } }
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

exports.renameList = async (req, res) => {
  try {
    const { listId, newTitle } = req.body;

    if (!newTitle || !listId) {
      return res.status(400).json({
        status: 'error',
        message: 'No new title or list id title is provided'
      });
    }

    await List.findOneAndUpdate(
      { _id: listId },
      { title: newTitle }
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

exports.getBoardLists = async (req, res) => {
  try {
    const { boardId } = req.body;

    if (!boardId) {
      return res.status(400).json({
        status: 'error',
        message: 'No board id title is provided'
      });
    }

    const { lists } = await Board.findById(boardId)
      .populate({
        path: 'lists',
        populate: { path: 'cards' }
      });

    return res.status(200).json({
      status: 'ok',
      lists
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.reorderList = async (req, res) => {
  try {
    const {
      listId, cardId, end
    } = req.body;
    if (!listId || !cardId) {
      return res.status(400).json({
        status: 'error',
        message: 'No needed fields is provided'
      });
    }

    const { cards } = await List.findById(listId);
    const reordered = cards.filter(id => id.toString() !== cardId);
    reordered.splice(end, 0, cardId);

    await List.findByIdAndUpdate(
      { _id: listId },
      { cards: reordered }
    ).exec();

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

exports.moveCardsBetweenLists = async (req, res) => {
  try {
    const {
      sourceId, destinationId, cardId, end
    } = req.body;
    if (!sourceId || !destinationId || !cardId) {
      return res.status(400).json({
        status: 'error',
        message: 'No needed fields is provided'
      });
    }

    await List.findOneAndUpdate(
      { _id: sourceId },
      { $pull: { cards: cardId } }
    );
    await List.findByIdAndUpdate(
      { _id: destinationId },
      { $push: { cards: { $each: [cardId], $position: end } } }
    ).exec();

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

