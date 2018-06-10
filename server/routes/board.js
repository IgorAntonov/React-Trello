const express = require('express');

const board = require('../controllers/board');

const router = express.Router();

router.post('/create', board.createBoard);

router.post('/delete', board.deleteBoard);

router.post('/rename', board.renameBoard);

module.exports = router;
