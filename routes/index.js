var express = require('express');
var router = express.Router();
var PagController = require('../controllers/pagController');

/* GET home page. */
router.get('/', function(req, res, next) {
  pagController = new PagController(req, res, next);
  pagController.paginate(10,5);
});

module.exports = router;
