var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello World!")
});

app.get('/clouds.json', function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({clous : ["Altocumulus ", "Altostratus", "Cumulonimbus", "Nimbostratus", "Cirrocumulus", "Stratus"]}));
  res.end();
});

var port = 5000;
app.listen(port);

module.exports = app;