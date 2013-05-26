require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'libs/jquery/jquery.min',
        'backbone': 'libs/backbone-amd/backbone-min',
        'underscore': 'libs/underscore-amd/underscore-min',
        'jquerymobile': 'libs/jquery-mobile/jquery.mobile-1.3.1.min',
        'app': './app',
        'templates': '../templates'
    }
});

require([
    "jquery",
    "backbone",
    "app/routers/MainRouter"
], function ($, Backbone, MainRouter) {
    $(document).on("mobileinit",
        // Set up the "mobileinit" handler before requiring jQuery Mobile's module
        function () {
            $.mobile.ajaxEnabled = false;
            $.mobile.linkBindingEnabled = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;
        }
    );

    // Remove page from DOM when it's being replaced
    $('div[data-role="page"]').on('pagehide', function (event, ui) {
        console.log('remove');
        $(event.currentTarget).remove();
    });

    require([ "jquerymobile" ], function () {
        // Instantiates a new Backbone.js Mobile Router
        this.router = new MainRouter();

        Backbone.history.start();
    });

});