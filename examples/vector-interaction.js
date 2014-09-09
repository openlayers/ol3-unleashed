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
      color: 'white'
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

map.on('click', function(evt) {
  var element = popup.getElement();
  $(element).popover('destroy');
  popup.setPosition(evt.coordinate);
  var markup;
  map.forEachFeatureAtPixel(evt.pixel, function(feature) {
    var area = feature.getGeometry().getArea();
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
