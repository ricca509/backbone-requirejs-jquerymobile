define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/EventListItemTemplate.html',
], function($, Backbone, _, eventListItemTemplate) {
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