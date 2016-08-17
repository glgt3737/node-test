var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var router = require('./router');
var config = require('./config').server;

var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

router(app);

app.listen(config.port, () => {
  console.log('node-test listen at port ' + config.port);
});