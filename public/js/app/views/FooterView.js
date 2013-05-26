define([
    'backbone',
    'underscore',
    'text!templates/footerTemplate.html'
], function(Backbone, _, footerTemplate) {
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