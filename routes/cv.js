/**
 * Created by paalgyula on 2016.12.03..
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cv-hu', { title: 'Express' });
});

module.exports = router;
