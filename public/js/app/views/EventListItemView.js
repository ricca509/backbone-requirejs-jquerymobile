define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/EventListItemTemplate.html'
], function($, _, Backbone, eventListItemTemplate) {
	var View = Backbone.View.extend({
		tagName: 'li',

		events: {
			'click a': 'goToDetails'
		},

		render: function() {
			this.$el.html(_.template(eventListItemTemplate, this.model.toJSON()));
			return this;
		},

		goToDetails: function() {
			Backbone.history.navigate('events/' + this.model.id, { trigger: true });
		}
	});

	return View;
});