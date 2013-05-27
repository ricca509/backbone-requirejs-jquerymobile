define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/EventDetailsTemplate.html',
], function($, Backbone, _, eventDetailsTemplate) {
    var View = Backbone.View.extend({
        render: function() {
            this.$el.html(_.template(eventDetailsTemplate, this.model.toJSON()));
            return this;
        }
    });

    return View;
});