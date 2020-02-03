var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

/* GET home page. */
router.get('/', authMiddleware, function(req, res, next) {
  res.render('carrito');
});

module.exports = router;
