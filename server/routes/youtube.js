var express = require('express');
var router = express.Router();

const VideosController = require('../controllers/videos');

var controller = new VideosController();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(controller.getAll());
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  res.send(controller.add(req.body));
});

module.exports = router;
