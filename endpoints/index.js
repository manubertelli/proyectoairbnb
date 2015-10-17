var express = require('express');
var router = express.Router();

// router conecta con los endpoints
router.use('/users/',require('./users'));
router.use('/apartments/',require('./apartments'));
// router.use('/reservations/',require('./reservations'));

module.exports = router;