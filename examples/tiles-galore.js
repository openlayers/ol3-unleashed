var layers = [
  new ol.layer.Tile({
    title: 'OSM',
    source: new ol.source.OSM(),
    visible: false
  }),
  new ol.layer.Tile({
    title: 'MapQuest OSM',
    source: new ol.source.MapQuest({layer: 'osm'}),
    visible: true
  }),
  new ol.layer.Tile({
    title: 'Bing Aerial',
    source: new ol.source.BingMaps({
      key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3',
      imagerySet: 'Aerial'
    }),
    visible: false
  }),
  new ol.layer.Tile({
    title: 'Stamen',
    source: new ol.source.Stamen({
      layer: 'toner'
    }),
    visible: false
  }),
  new ol.layer.Tile({
    title: 'MapBox',
    source: new ol.source.TileJSON({
      url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp'
    }),
    visible: false
  }),
  new ol.layer.Tile({
    title: 'XYZ',
    source: new ol.source.XYZ({
      attributions: [
        new ol.Attribution({
          html: 'Tiles &copy; <a href="http://services.arcgisonline.com/' +
              'ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
        })
      ],
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/' +
          'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    visible: false
  })
];

var map = new ol.Map({
  target: 'map',
  layers: layers,
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});

angular.module('ngeo', [])
    .controller('LayerCtrl', ['$scope', function($scope) {

      $scope.layers = layers;

      $scope.which = layers.filter(function(layer) {
        return layer.getVisible();
      })[0].get('title');

      $scope.$watch('which', function(title, old) {
        layers.forEach(function(layer) {
          if (layer.get('title') === title) {
            layer.setVisible(true);
          } else {
            layer.setVisible(false);
          }
        });
      });

    }]);
