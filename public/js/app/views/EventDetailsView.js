define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/EventDetailsTemplate.html'
], function($, _, Backbone, eventDetailsTemplate) {
    var View = Backbone.View.extend({
        render: function() {
            this.$el.html(_.template(eventDetailsTemplate, this.model.toJSON()));
            return this;
        }
    });

    return View;
});