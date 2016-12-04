var express = require('express');
var router = express.Router();
var debug = require('debug')('paalgyula:express');
var i18n = require('i18n-2');

/* GET home page. */
router.get('/', function (req, res, next) {
  var acceptedLangs = req.acceptsLanguages();

  if (isAccepted(acceptedLangs, 'hu')) {
    req.i18n.setLocale('hu');
    res.redirect('/hu/');
  } else {
    debug.info('Accepted language request: ' + acceptedLangs);
    req.i18n.setLocale('hu');
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
