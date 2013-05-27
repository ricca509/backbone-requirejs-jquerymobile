define([
	'backbone'
], function(Backbone) {
	var Model = Backbone.Model.extend({});

	var Collection = Backbone.Collection.extend({
		models: Model,
		url: '/events'
	});

	return {
		model: Model,
		collection: Collection
	};
});