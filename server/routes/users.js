var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    users: [{
      name: "Teszt Elek",
      type: "user"
    }, {
      name: "Haver Bro",
      type: "admin"
    }]
  });
});

module.exports = router;
