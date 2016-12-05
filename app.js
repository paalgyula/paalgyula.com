var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('paalgyula:app');
var i18n = require('i18n-2');
var proxy = require('express-http-proxy');

var users = require('./routes/users');
var langselector = require('./routes/lang-selector');
var tutorial = require('./routes/tutorials');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

i18n.expressBind(app, {
  locales: ['hu', 'en'],
  cookieName: 'locale',
  extension: '.json'
});

app.use('/', langselector);
app.use('/users', users);
app.use('/Tutorial/', tutorial);
app.use('/rpc', proxy('127.0.0.1:3390'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  debug(req.acceptsLanguages());
  debug(req.headers['user-agent']);

  if (!err.status)
    debug(err);
  else
    debug(err.message + " " + err.status || 500 + " url: " + req.url);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
