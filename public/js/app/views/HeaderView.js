define([
    'backbone',
    'underscore',
    'text!templates/headerTemplate.html'
], function(Backbone, _, headerTemplate) {
    var View = Backbone.View.extend({
        initialize: function() {
        },

        render: function() {
            var template = _.template(headerTemplate);
            this.$el.html(template);

            return this;
        }
    });

    return View;
});