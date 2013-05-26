define([
    'backbone',
    'app/views/AppView',
    'app/views/EventsView',
    'app/views/EventView',
    'app/views/HeaderView',
    'app/views/FooterView',
    'app/views/JqmPageView'
], function (Backbone, AppView, EventsView, EventView, HeaderView, FooterView, jqMPageView) {
    var Router = Backbone.Router.extend({
        routes: {
            'events': 'getEvents',
            'events/:id': 'getEvent',
            "": "main"
        },

        main: function () {
            new AppView();
        },

        getEvent: function(id) {
            var eventPage = new jqMPageView();
            eventPage.setHeaderView(HeaderView);
            eventPage.setContentView(EventView);
            eventPage.setFooterView(FooterView);
            eventPage.navigate();
        },

        getEvents: function () {
            var eventPage = new jqMPageView();
            eventPage.setHeaderView(HeaderView);
            eventPage.setContentView(EventsView);
            eventPage.setFooterView(FooterView);
            eventPage.navigate();
        }
    })

    return Router;
});