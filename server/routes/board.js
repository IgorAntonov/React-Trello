const express = require('express');

const board = require('../controllers/board');

const router = express.Router();

router.post('/create', board.createBoard);

router.put('/rename', board.renameBoard);

router.delete('/delete', board.deleteBoard);

module.exports = router;
