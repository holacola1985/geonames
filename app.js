var createServer = require('./lib/createServer');

var port = process.env.PORT || 3000;
var app = createServer();

app.listen(port, function() {
  console.log('Middleware launched at ' + (new Date()).toISOString());
  console.log('...listening on port ' + port + '!');
});
