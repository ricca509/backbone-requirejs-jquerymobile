define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/EventItemDetailsTemplate.html',
], function($, Backbone, _, eventItemDetailsTemplate) {
    var View = Backbone.View.extend({
        render: function() {
            this.$el.html(_.template(eventItemDetailsTemplate, this.model.toJSON()));
            return this;
        }
    });

    return View;
});