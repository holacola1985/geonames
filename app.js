var request = require('request');
var geojson = require('geojson');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello World! A service description page will come here.');
});

//Temp bypass, before returning specific info.
app.get('/coord/:place', function(req, res) {
  console.log('Resquest with params: ' + JSON.stringify(req.params));
  
  var geonames_response = [];
  // geonames_response = request
  //   .get('http://localhost:80/city?name=' + req.params.place)
  //   .pipe(res);
  // console.log(res.body);

  request('http://localhost:80/city?name=' + req.params.place,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body);// Show the JSON response of geonames.
        geonames_response = JSON.parse(body);
        var geonames_first = [];
        if (geonames_response.length > 0) {
          geonames_first.push(geonames_response[0]);
          geonames_first[0].latitude = geonames_first[0].location.latitude;
          geonames_first[0].longitude = geonames_first[0].location.longitude;
          geojson.parse(geonames_first,
            { Point: ['latitude', 'longitude'] },
            function (geoJsonObj) {
              console.log(JSON.stringify(geoJsonObj, null, 2));
              res.send(geoJsonObj);
            }
          );
        } else {
          res.send({});
        }
      }
    });
});

app.listen(port, function() {
  console.log('Middleware launched at ' + (new Date()).toISOString());
  console.log('...listening on port ' + port + '!');
});