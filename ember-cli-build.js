/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'bower_components/materialize/sass'
      ],
      //nodeSass: nodeSass // Workaround for ember-cli-sass bug https://github.com/aexmachina/ember-cli-sass/issues/117
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

    app.import('bower_components/materialize/dist/css/materialize.css');

    app.import('bower_components/materialize/dist/font/roboto/Roboto-Bold.eot', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Bold.ttf', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Bold.woff', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Bold.woff2', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Light.eot', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Light.ttf', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Light.woff', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Light.woff2', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Medium.eot', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Medium.ttf', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Medium.woff', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Medium.woff2', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Regular.eot', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Regular.ttf', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Regular.woff', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Regular.woff2', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Thin.eot', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Thin.ttf', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Thin.woff', {destDir: 'fonts/roboto'});
    app.import('bower_components/materialize/dist/font/roboto/Roboto-Thin.woff2', {destDir: 'fonts/roboto'});

  return app.toTree();
};
