var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var tripsRouteer = require('./routes/trips');
var bookingsRouter = require('./routes/bookings');

var app = express();
const cors = require('cors');
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trips', tripsRouteer);
app.use('/bookings', bookingsRouter);

module.exports = app;
