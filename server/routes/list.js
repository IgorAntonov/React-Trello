const express = require('express');

const list = require('../controllers/list');

const router = express.Router();

router.post('/create', list.createList);

router.put('/rename', list.renameList);
router.put('/reorder', list.reorderList);
router.put('/move_from_to', list.moveCardsBetweenLists);

router.delete('/delete', list.deleteList);

router.post('/get_lists', list.getBoardLists);

module.exports = router;
