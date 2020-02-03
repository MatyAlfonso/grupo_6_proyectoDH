// ************ Require's ************
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
var session = require('express-session');


// ************ express() - (don't touch) ************

var app = express();

// ************ Middlewares - (don't touch) ************

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({secret: 'J&M'}))


// ************ Template Engine - (don't touch) ************

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************

var homeRouter = require('./routes/home');
var productDetailRouter = require('./routes/product-detail');
var usersRouter = require('./routes/users');
var chartRouter = require('./routes/chart');
var recordarmeMiddleware = require("./middlewares/recordarmeMiddleware");

app.use('/', homeRouter);
app.use('/detalle-producto', productDetailRouter);
app.use('/users', usersRouter);
app.use('/chart',chartRouter);
app.use(recordarmeMiddleware);
// ************ DON'T TOUCH FROM HERE ************
// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ************ exports app - dont'touch ************
module.exports = app;
