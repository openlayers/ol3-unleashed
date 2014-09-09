var raster = new ol.layer.Tile({
  source: new ol.source.MapQuestOpenAerial()
});

var vector = new ol.layer.Vector({
  id: 'vector',
  source: new ol.source.Vector({
    parser: new ol.parser.ogc.GML_v3(),
    url: 'data/states.gml'
  }),
  style: new ol.style.Style({
    rules: [
      new ol.style.Rule({
        filter: 'renderIntent("selected")',
        symbolizers: [
          new ol.style.Fill({
            color: '#ffffff',
            opacity: 0.1
          }),
          new ol.style.Stroke({
            color: '#000066',
            width: 6
          }),
          new ol.style.Stroke({
            color: '#0066dd',
            width: 3
          })
        ]
      }),
      new ol.style.Rule({
        filter: 'renderIntent("temporary")',
        symbolizers: [
          new ol.style.Shape({
            fill: new ol.style.Fill({
              color: '#000066',
              opacity: 1
            }),
            size: 18
          })
        ]
      }),
      new ol.style.Rule({
        filter: 'renderIntent("future")',
        symbolizers: [
          new ol.style.Shape({
            fill: new ol.style.Fill({
              color: '#0066dd',
              opacity: 1
            }),
            size: 18
          })
        ]
      })
    ],
    symbolizers: [
      new ol.style.Stroke({
        color: '#000000',
        width: 5
      }),
      new ol.style.Stroke({
        color: '#ffffff',
        width: 2.5
      })
    ]
  })
});

var selectInteraction = new ol.interaction.Select({
  layerFilter: function(layer) { return layer.get('id') == 'vector'; }
});

var map = new ol.Map({
  interactions: ol.interaction.defaults().extend(
      [selectInteraction, new ol.interaction.Modify()]),
  layers: [raster, vector],
  target: 'map',
  view: new ol.View({
    center: [-11000000, 4600000],
    zoom: 4
  })
});
