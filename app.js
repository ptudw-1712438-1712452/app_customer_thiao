var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHsb = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var expressValidator= require('express-validator');
var bodyPaser = require('body-parser');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var classifyRouter = require('./routes/classify');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
require('./config/passport');


var app = express();
app.use(expressValidator());

// view engine setup
app.engine('.hbs', expressHsb({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next){
  res.locals.login = req.isAuthenticated();
  next();
});
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/classify', classifyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
