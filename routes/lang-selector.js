/**
 * Created by paalgyula on 2016.12.03..
 */
var express = require('express');
var router = express.Router();


/* Index page, nyelvesítés */
router.get('/', function (req, res, next) {
  var acceptedLangs = req.acceptsLanguages();
  if (isAccepted(acceptedLangs, 'hu')) {
    res.redirect('/hu/');
  } else {
    debug.info('Accepted language request: ' + acceptedLangs);
    res.redirect("/en/");
  }
});

/* Lang alapján a nyelv. */
router.get('/:lang/', function (req, res, next) {
  req.i18n.setLocale(req.param('lang'));

  console.log(router.params);
  res.render('circum-vitae', {title: 'Express'});
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
