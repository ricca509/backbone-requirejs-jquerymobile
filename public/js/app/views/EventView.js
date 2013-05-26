define([
    'jquery',
    'backbone',
    'underscore'
], function($, Backbone, _, page1Tpl) {
    var View = Backbone.View.extend({
        render: function() {
            this.$el.html("element");

            return this;
        }
    });

    return View;
});