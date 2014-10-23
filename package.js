Package.describe({
  name: 'garrilla:3r',
  summary: 'A small package to make Meteor  apps respond to device rotation reactively, no CSS.',
  version: '0.2.4',
  git: 'https://github.com/garrilla/garrilla-3r.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('client/garrilla:3r.html','client');
  //api.addFiles('body.html','client');
  api.addFiles('client/garrilla:3r.js','client');
  api.use(['templating','session','underscore'],'client')
  api.export('dimensions')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('garrilla:3r');
  api.addFiles('garrilla:3r-tests.js');
});
