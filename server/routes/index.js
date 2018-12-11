const express = require('express');
const router  = express.Router();


router.use('/api/auth', require('./auth'));

router.use('/api/map', require('./map'));

module.exports = router;