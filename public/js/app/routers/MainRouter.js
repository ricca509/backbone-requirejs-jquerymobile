define([
    'backbone',
    'app/views/EventsView',
    'app/views/EventDetailsView',
    'app/views/HeaderView',
    'app/views/FooterView',
    'app/views/JqmPageView',
    'app/models/event'
], function (Backbone, EventsView, EventDetailsView, HeaderView, FooterView, jqMPageView, Event) {
    var Router = Backbone.Router.extend({
        initialize: function() {

            // Handle back button throughout the application
            $(document).on('click', '[data-rel="back"]', function(event) {
                window.history.back();
                return false;
            });
        },

        routes: {
            'events': 'getEvents',
            'events/:id': 'getEvent',
            '': 'main'
        },

        main: function () {
            this.navigate('events', { trigger: true });
        },

        getEvent: function(id) {
            $.mobile.loading( 'show' );
            var evCollection = new Event.collection();

            evCollection.fetch({
                success: function(collection, response, options) {
                    var model = collection.get(id);
                    var eventPage = new jqMPageView();
                    eventPage.setHeaderView(new HeaderView({
                        model: model
                    }), true);
                    eventPage.setContentView(new EventDetailsView({
                        model: model
                    }));
                    eventPage.setFooterView();
                    eventPage.navigate('slide');
                }
            });
        },

        getEvents: function () {
            $.mobile.loading( 'show' );
            var evCollection = new Event.collection();

            var eventPage = new jqMPageView();
            eventPage.setHeaderView(new HeaderView());
            eventPage.setContentView(new EventsView({
                collection: evCollection
            }));
            eventPage.setFooterView();
            evCollection.fetch({
                success: function(collection, response, options) {
                    eventPage.navigate();
                }
            });
        }
    });

    return Router;
});