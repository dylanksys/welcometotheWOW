var express = require ('express');
var thehome = require('../routers/thehome');

var app = express();

app.use('/', thehome);

app.listen(1337, function () {
  console.log('hithere listening on port 1337');
};
