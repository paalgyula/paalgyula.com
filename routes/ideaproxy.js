var express = require('express');
var router = express.Router();
const http = require('http');
var debug = require('debug')('paalgyula:ideaproxy');

/* GET home page. */
router.get('/obtainTicket.action', function (req, res, next) {
    debug('URL: %', req.url);
    //res.send('<!-- a6d993716ab9b0503b49827356bb7f2d92a664ca69c44bddfad1a4a48a2a917a045fe34958a2e69f33636e1d0706508dfa6007e8bdea9e3e36745c6dd9f9d90b -->\n' + 
// '<ObtainTicketResponse><message></message><prolongationPeriod>607875500</prolongationPeriod><responseCode>OK</responseCode><salt>1480935508562</salt>
// <ticketId>1</ticketId><ticketProperties>licensee=Paál Gyula	licenseType=0	</ticketProperties></ObtainTicketResponse>');

    //The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'idea.lanyus.com',
  path: '/rpc' + req.url.replace(/userName=[^&]*/, 'userName=PaalGyula'),
  //since we are listening on a custom port, we need to specify it by hand
  port: '80',
  //This is what changes the request to a POST request
  method: 'GET'
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    //str = str.replace(/licensee=[^\t]*/, 'licensee=Paál Gyula');
    res.send(str);
  });
}

var request = http.request(options, callback);
request.end();

});

module.exports = router;