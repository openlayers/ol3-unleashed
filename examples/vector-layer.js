var raster = new ol.layer.Tile({
  source: new ol.source.MapQuest({layer: 'sat'})
});

var ramp = d3.scale.linear()
    .range(['steelblue', 'brown'])
    .interpolate(d3.interpolateHcl);

var vector = new ol.layer.Vector({
  source: new ol.source.GeoJSON({
    url: 'data/countries.json',
    projection: 'EPSG:3857'
  }),
  style: function(feature, resolution) {
    var text = '';
    var name = feature.get('name');
    if (resolution < 5000) {
      text = name;
    }
    var geom = feature.getGeometry();
    var projectedArea = geom.getArea();
    var geodesicArea = 0;
    if (geom.getType() === 'MultiPolygon') {
      geodesicArea = getMultiArea(geom, 'EPSG:3857');
    } else {
      geodesicArea = getPolyArea(geom, 'EPSG:3857');
    }
    return [new ol.style.Style({
      fill: new ol.style.Fill({
        color: ramp(geodesicArea / projectedArea)
      }),
      stroke: new ol.style.Stroke({
        color: 'white',
        width: 1
      }),
      text: new ol.style.Text({
        font: '18px Calibri,sans-serif',
        text: text,
        fill: new ol.style.Fill({
          color: '#fff'
        })
      })
    })];
  }
});

var map = new ol.Map({
  layers: [vector],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});

function getMultiArea(multi, projection) {
  var polys = multi.getPolygons();
  return polys.reduce(function(area, poly) {
    return area + getPolyArea(poly, projection);
  }, 0);
}

function getPolyArea(poly, projection) {
  var rings = poly.getLinearRings();
  var exterior = rings.shift();
  var area = getRingArea(exterior, projection);
  return rings.reduce(function(a, ring) {
    return a - getRingArea(ring, projection);
  }, area);
}

function getRingArea(ring, projection) {
  ring = ring.clone().transform(projection, 'EPSG:4326');
  var area = 0;
  var coordinates = ring.getCoordinates();
  var len = coordinates.length;
  if (len > 2) {
    var p1, p2;
    for (var i = 0; i < len - 1; i++) {
      p1 = coordinates[i];
      p2 = coordinates[i + 1];
      area += ((p2[0] - p1[0]) * Math.PI / 180) *
              (2 + Math.sin(p1[1] * Math.PI / 180) +
              Math.sin(p2[1] * Math.PI / 180));
    }
    area *= 6378137 * 6378137 / 2.0;
  }
  return area;
}
