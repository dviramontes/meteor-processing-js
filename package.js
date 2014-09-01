Package.describe({
  summary: " processing.js 1.4.8 minified ",
  version: "1.0.0",
  git: " https://github.com/bgrayburn/meteor-processing-js "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('processing.min.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bgrayburn:processingjs');
  api.addFiles('bgrayburn:processingjs-tests.js');
});
