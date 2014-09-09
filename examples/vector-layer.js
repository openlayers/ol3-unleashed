var raster = new ol.layer.Tile({
  source: new ol.source.MapQuest({layer: 'sat'})
});

var colors = [
  'rgba(255, 0, 255, 0.3)',
  'rgba(255, 255, 0, 0.3)',
  'rgba(0, 255, 255, 0.3)',
  'rgba(255, 0, 0, 0.3)',
  'rgba(0, 0, 255, 0.3)'
];

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
    return [new ol.style.Style({
      fill: new ol.style.Fill({
        color: colors[name.length % colors.length]
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
  layers: [raster, vector],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});
