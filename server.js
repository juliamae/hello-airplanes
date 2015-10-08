// Mod jewels
var express = require('express');
var sbs1    = require('sbs1');

var app = express();

app.get('/', function(req, res){
  res.send('Hello Airplanes');
})

app.listen(1982);
