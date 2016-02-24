# geonames
geonames.org wrapper

## Credits
Currently based upon [jumplead/geonames-server](https://hub.docker.com/r/jumplead/geonames-server/) Docker image,
also versionned on [GitHub](https://github.com/Jumplead/GeonamesServer).

## Usage
### Get coordinates from place name
URL: http://myserver:myport`/coord/:place_name`

##### Response format
Using [GeoJSON](http://geojson.org/geojson-spec.html)'s widest list type `FeatureCollection` to be able to add future `properties`. [subject to possibly evolve]

##### Example
URL: http://myserver:myport`/coord/paris`

Response:
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": 
      {
        "type": "Point",
        "coordinates": 
          [
            2.3488,
            48.85341
          ]
      },
      "properties": { }
    }
  ]
}
```
