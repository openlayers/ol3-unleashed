var raster = new ol.layer.Tile({
  source: new ol.source.MapQuest({layer: 'sat'})
});

var vector = new ol.layer.Vector({
  source: new ol.source.GeoJSON({
    url: 'data/countries.json',
    projection: 'EPSG:3857'
  })
});

var select = new ol.interaction.Select();

var modify = new ol.interaction.Modify({
  features: select.getFeatures()
});

var map = new ol.Map({
  target: 'map',
  interactions: ol.interaction.defaults().extend([select, modify]),
  layers: [raster, vector],
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});
