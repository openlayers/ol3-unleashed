var seattle = [-13618019.918127416, 6050307.967492877];

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.Stamen({
        layer: 'watercolor'
      })
    })
  ],
  view: new ol.View({
    center: seattle,
    zoom: 11
  })
});

var popup = new ol.Overlay({
  element: document.getElementById('popup')
});
map.addOverlay(popup);

map.on('click', function(evt) {
  var element = popup.getElement();
  var coordinate = evt.coordinate;
  var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
      coordinate, 'EPSG:3857', 'EPSG:4326'));
  $(element).popover('destroy');
  popup.setPosition(coordinate);
  $(element).popover({
    animation: false,
    placement: 'top',
    html: true,
    content: '<p>The location you clicked is:</p><code>' + hdms + '</code>'
  });
  $(element).popover('show');
});
