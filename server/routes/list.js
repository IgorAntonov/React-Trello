const express = require('express');

const list = require('../controllers/list');

const router = express.Router();

router.post('/create', list.createList);

router.put('/rename', list.renameList);

router.delete('/delete', list.deleteList);

module.exports = router;
