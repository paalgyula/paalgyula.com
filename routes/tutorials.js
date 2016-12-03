/**
 * Created by paalgyula on 2016.12.03..
 */
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/:tutorial', function(req, res) {
  console.log(req.params);
  res.render('index', { title: 'Express' });
});

module.exports = router;
