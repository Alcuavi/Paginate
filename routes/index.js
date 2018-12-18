var express = require('express');
var router = express.Router();
var PagController = require('../controllers/pagController');

/* GET home page. */
router.get('/', function(req, res, next) {
  let page = (parseInt(req.query.page)||1) -1;
  let limit = 10;
  let offset= page * limit;

  pagController = new PagController(req, res, next);
  pagController.paginate(offset,limit);
});

module.exports = router;
