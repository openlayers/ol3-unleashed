var raster = new ol.layer.Tile({
  source: new ol.source.MapQuest({layer: 'sat'})
});

var map = new ol.Map({
  layers: [raster],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});

var globe = new olcs.OLCesium(map);
$('#mapglobe').click(function() {
  globe.setEnabled(!globe.getEnabled());
});
