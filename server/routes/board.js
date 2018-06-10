const express = require('express');

const board = require('../controllers/board');

const router = express.Router();

router.post('/create', board.createBoard);

module.exports = router;
