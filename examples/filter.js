var key = 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3';

var imagery = new ol.layer.Tile({
  source: new ol.source.BingMaps({key: key, imagerySet: 'Aerial'})
});

var map = new ol.Map({
  layers: [imagery],
  target: 'map',
  view: new ol.View({
    center: ol.proj.transform([-120, 50], 'EPSG:4326', 'EPSG:3857'),
    zoom: 6
  })
});

var edge = [
  0, 1, 0,
  1, -4, 1,
  0, 1, 0
];

function normalize(k) {
  var len = k.length;
  var normal = new Array(len);
  var i, sum = 0;
  for (i = 0; i < len; ++i) {
    sum += k[i];
  }
  if (sum <= 0) {
    normal.normalized = false;
    sum = 1;
  } else {
    normal.normalized = true;
  }
  for (i = 0; i < len; ++i) {
    normal[i] = k[i] / sum;
  }
  return normal;
}

var kernel = normalize(edge);

/**
 * Apply a filter on "postcompose" events.
 * @param {ol.render.Event} event Render event.
 */
imagery.on('postcompose', function(event) {
  convolve(event.context, kernel);
});


/**
 * Apply a convolution kernel to canvas.  This works for any size kernel, but
 * performance starts degrading above 3 x 3.
 * @param {CanvasRenderingContext2D} context Canvas 2d context.
 * @param {Array.<number>} kernel Kernel.
 */
function convolve(context, kernel) {
  var canvas = context.canvas;
  var width = canvas.width;
  var height = canvas.height;

  var size = Math.sqrt(kernel.length);
  var half = Math.floor(size / 2);

  var inputData = context.getImageData(0, 0, width, height).data;

  var output = context.createImageData(width, height);
  var outputData = output.data;

  for (var pixelY = 0; pixelY < height; ++pixelY) {
    var pixelsAbove = pixelY * width;
    for (var pixelX = 0; pixelX < width; ++pixelX) {
      // var r = 0, g = 0, b = 0, a = 0;
      var v = 0, cr = 0, cg = 0, cb = 0;
      for (var kernelY = 0; kernelY < size; ++kernelY) {
        for (var kernelX = 0; kernelX < size; ++kernelX) {
          var weight = kernel[kernelY * size + kernelX];
          var neighborY = Math.min(
              height - 1, Math.max(0, pixelY + kernelY - half));
          var neighborX = Math.min(
              width - 1, Math.max(0, pixelX + kernelX - half));
          var inputIndex = (neighborY * width + neighborX) * 4;
          var r = inputData[inputIndex];
          var g = inputData[inputIndex + 1];
          var b = inputData[inputIndex + 2];
          v += r * weight;
          v += g * weight;
          v += b * weight;
          if (kernelY === half && kernelX === half) {
            cr = r;
            cg = g;
            cb = b;
          }
        }
      }
      v = v / 3;
      o = 188 + (cr + cg + cb) / 8;
      var outputIndex = (pixelsAbove + pixelX) * 4;
      if (v > 125) {
        outputData[outputIndex] = v;
        outputData[outputIndex + 1] = 0;
        outputData[outputIndex + 2] = 0;
        outputData[outputIndex + 3] = 255;
      } else {
        outputData[outputIndex] = o;
        outputData[outputIndex + 1] = o;
        outputData[outputIndex + 2] = o;
        outputData[outputIndex + 3] = 255;
      }
    }
  }
  context.putImageData(output, 0, 0);
}
