define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/EventListItemView'
], function($, _, Backbone, EventListItemView) {
    var View = Backbone.View.extend({
        tagName: 'ul',

        attributes: {
            'data-role': 'listview'
        },

        initialize: function() {
            this.collection.on('add', this.addOne, this);
            this.collection.on('reset', this.addAll, this);

        },
        render: function() {

            return this;
        },
        addAll: function() {
            this.collection.each(addOne);
        },
        addOne: function(event) {
            var view = new EventListItemView({
                model: event
            });

            this.$el.prepend(view.render().$el);
        }
    });

    return View;
});