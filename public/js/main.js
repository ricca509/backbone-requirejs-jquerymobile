require.config({
    baseUrl: 'js',
    paths: {
        'jquery': '../libs/jquery/jquery.min',
        'backbone': '../libs/backbone/backbone-min',
        'underscore': '../libs/underscore/underscore-min',
        'jquerymobile': '../libs/jquery-mobile-bower/js/jquery.mobile-1.3.2.min',
        'app': './app',
        'templates': '../templates'
    },
    shim: {
      underscore: {
          exports: "_"
      },
      backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      }
  }
});

require([
        "jquery",
        "backbone",
        "app/routers/MainRouter",
        "app/helpers/jQmInit"
        ], function ($, Backbone, MainRouter) {

            require([ "jquerymobile" ], function () {
        // Instantiates a new Backbone.js Mobile Router
        this.router = new MainRouter();

        Backbone.history.start();
    });

        });