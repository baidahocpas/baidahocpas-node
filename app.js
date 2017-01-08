// Dependencies
const bodyParser    = require('body-parser');
const constants     = require('./config/constants');
const cookieParser  = require('cookie-parser');
const dbConfig      = require('./config/db');
const express       = require('express');
const firebase      = require('firebase');
const logger        = require('morgan');
const path          = require('path');

const app = express();

// Database
const db = firebase.initializeApp(dbConfig);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const routes = require('./routes');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = constants.env === 'development' ? err : {};
  const errStatus = err.status || 500;
  
  // render the error page
  res.status(errStatus);
  res.render('error', {
    env: constants.env,
    siteTitle: errStatus + ' | ' + constants.siteTitle,
  });
});

module.exports = app;
