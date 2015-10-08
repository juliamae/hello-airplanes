var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('Hello Airplanes');
})

app.listen(1982);
