var express = require('express');
var router = express.Router();
var debug = require('debug')('express');

/* GET home page. */
router.get('/', function (req, res, next) {
  var acceptedLangs = req.acceptsLanguages();

  if (isAccepted(acceptedLangs, "hu"))
    res.redirect("/hu/");
  else {
    console.log('Accepted language request: ' + acceptedLangs);
    res.redirect("/en/");
  }
});

/**
 * Checks for accepted language in an array
 * @param acceptedLangs accepted language array
 * @param langCode langcode for example: 'hu' or 'hu-HU'
 */
function isAccepted(acceptedLangs, langCode) {
  return acceptedLangs.indexOf(langCode) > -1;
}

module.exports = router;
