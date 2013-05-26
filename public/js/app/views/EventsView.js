define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/eventElementTemplate.html'
], function($, Backbone, _, page1Tpl) {
    var View = Backbone.View.extend({
        render: function() {
            this.$el.html(page1Tpl);

            return this;
        }
    });

    return View;
});