const express = require('express');

const card = require('../controllers/card');

const router = express.Router();

router.post('/create', card.createCard);
router.post('/new_comment', card.addComment);

router.put('/rename', card.renameCard);
router.put('/description', card.addDescription);

router.delete('/delete', card.deleteCard);

module.exports = router;
