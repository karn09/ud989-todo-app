/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
      priority: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
      var title = this.get('title');
      this.save({
				completed: !this.get('completed')
			});
		},
    
    // Toggle the 'priority' state of this todo item.
    togglePriority: function () {
      var title = this.get('title');
      console.log(!this.get('priority'))
      this.save({
        priority: !this.get('priority')
      })
    }
	});
})();
