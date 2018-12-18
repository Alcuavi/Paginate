var express = require('express');
var router = express.Router();
var PagController = require('../controllers/pagController');

/* GET home page. */
router.get('/', function(req, res, next) {
  let page = (parseInt(req.query.page)||1) -1;
  let limit = 50;

  pagController = new PagController(req, res, next);
  pagController.paginate(10,5);
});

module.exports = router;
