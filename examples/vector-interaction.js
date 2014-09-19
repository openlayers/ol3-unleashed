function formatArea(sqMeters) {
  var sqKm = Math.floor(sqMeters / 1000000000) * 1000;
  return sqKm.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
  '&nbsp;km<sup>2</sup>';
}

var raster = new ol.layer.Tile({
  source: new ol.source.MapQuest({layer: 'sat'})
});

var vector = new ol.layer.Vector({
  source: new ol.source.GeoJSON({
    url: 'data/countries.json',
    projection: 'EPSG:3857'
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(200,200,200,0.5)'
    })
  })
});

var map = new ol.Map({
  layers: [raster, vector],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});

var popup = new ol.Overlay({
  element: document.getElementById('popup')
});
map.addOverlay(popup);

map.on('pointermove', function(evt) {
  var hit = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
    return true;
  });
  if (hit) {
    document.body.style.cursor = 'pointer';
  } else {
    document.body.style.cursor = 'inherit';
  }
});

map.on('click', function(evt) {
  var element = popup.getElement();
  $(element).popover('destroy');
  popup.setPosition(evt.coordinate);
  var markup;
  map.forEachFeatureAtPixel(evt.pixel, function(feature) {
    var geom = feature.getGeometry();
    var area = 0;
    if (geom.getType() === 'MultiPolygon') {
      area = getMultiArea(geom, 'EPSG:3857');
    } else {
      area = getPolyArea(geom, 'EPSG:3857');
    }
    markup = feature.get('name') + '<br>' + formatArea(area);
  });
  if (markup) {
    $(element).popover({
      animation: false,
      placement: 'top',
      html: true,
      content: markup
    });
    $(element).popover('show');
  }
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
