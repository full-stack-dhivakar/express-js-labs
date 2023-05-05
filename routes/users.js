var express = require('express');
var router = express.Router();

let user = {
  name: 'Kumanan Murugesan'
};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(user);
});

module.exports = router;
