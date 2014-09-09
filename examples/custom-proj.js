proj4.defs('ESRI:53009',
    '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 ' +
    '+b=6371000 +units=m +no_defs');

var projection = ol.proj.get('ESRI:53009');

projection.setExtent([
  -9009954.605703328, -9009954.605703328,
  9009954.605703328, 9009954.605703328]);

projection.setWorldExtent([-179, -90, 179, 90]);

var vector = new ol.layer.Vector({
  source: new ol.source.GeoJSON({
    url: 'data/countries-110m.json',
    projection: projection
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({color: 'white'}),
    stroke: new ol.style.Stroke({color: 'steelblue'})
  })
});

var control = new ol.control.MousePosition({
  coordinateFormat: function(coordinate) {
    return ol.coordinate.toStringHDMS(coordinate);
  },
  projection: 'EPSG:4326',
  undefinedHTML: '&nbsp;'
});


var map = new ol.Map({
  target: 'map',
  controls: ol.control.defaults().extend([control]),
  layers: [vector],
  view: new ol.View({
    projection: projection,
    center: [0, 0],
    zoom: 1,
    maxZoom: 4
  })
});

var graticule = new ol.Graticule({
  map: map
});
