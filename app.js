var express = require('express');
var request = require('request');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello World! A service description page will come here.');
});

//Temp bypass, before returning specific info.
app.get('/coord/:place', function(req, res) {
  console.log('Resquest with params: ' + JSON.stringify(req.params));
  request.get('http://localhost:80/city?name=' + req.params.place)
    .pipe(res);
});

app.listen(port, function() {
  console.log('Middleware launched at ' + Date.now());
  console.log('...listening on port ' + port + '!');
});