const express = require('express');

const theme = require('../controllers/theme');

const router = express.Router();

router.put('/set', theme.setTheme);

module.exports = router;
