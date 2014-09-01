Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('bgrayburn:processingjs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bgrayburn:processingjs');
  api.addFiles('bgrayburn:processingjs-tests.js');
});
