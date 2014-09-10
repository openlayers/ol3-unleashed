var key = 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3';

var imagery = new ol.layer.Tile({
  source: new ol.source.BingMaps({key: key, imagerySet: 'Aerial'})
});

var gg2sm = ol.proj.getTransform('EPSG:4326', 'EPSG:3857');

// pulled from their video.json
// TODO: figure out why it doesn't transform quite right
var corners = [
  [-76.54335737228394, 39.18579907229748],
  [-76.52803659439087, 39.1838364847587],
  [-76.5295386314392, 39.17683392507606],
  [-76.54520273208618, 39.17876344106642]
].map(function(c) {return gg2sm(c);});

var line = new ol.geom.LineString(corners);
var extent = line.getExtent();

var view = new ol.View();
var map = new ol.Map({
  // TODO: translate, rotate
  interactions: ol.interaction.defaults({altShiftDragRotate: false}),
  layers: [imagery],
  target: 'map',
  view: view
});

view.fitExtent(extent, map.getSize());

// TODO: ask for permission (or pull directly)
var urls = [
  'data/baltimore-smoke.mp4',
  'data/baltimore-smoke.webm'
];
var video = document.createElement('video');
video.crossOrigin = 'Anonymous';

for (var i = 0; i < urls.length; i++) {
  var source = document.createElement('source');
  source.src = urls[i];
  video.appendChild(source);
}

// TODO: add some video controls
if (typeof video.loop == 'boolean') {
  video.loop = true;
} else {
  video.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}
video.play();


// TODO: unhack this - create a proper video source
var topLeft = corners[0];
var topRight = corners[1];
var bottomRight = corners[2];
var height = topRight[1] - bottomRight[1];
var width = topRight[0] - topLeft[0];
var dx = width;
var dy = topLeft[1] - topRight[1];

var rotation = Math.atan2(dy, dx);

// render video on every render frame
imagery.on('postcompose', function(event) {

  var frameState = event.frameState;
  var resolution = frameState.viewState.resolution;
  var origin = map.getPixelFromCoordinate(topLeft);

  var context = event.context;
  context.save();

  context.scale(frameState.pixelRatio, frameState.pixelRatio);
  context.translate(origin[0], origin[1]);
  context.rotate(rotation);
  context.drawImage(video, 0, 0, dx / resolution, height / resolution);

  context.restore();
});

// TODO: add a nice playback control
setInterval(function() {
  map.render();
}, 1000 / 30);
