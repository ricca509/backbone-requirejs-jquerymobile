define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/footerTemplate.html'
], function($, _, Backbone, footerTemplate) {
    var View = Backbone.View.extend({
        initialize: function() {
        },

        render: function() {
            var template = _.template(footerTemplate);
            this.$el.html(template);

            return this;
        }
    });

    return View;
});