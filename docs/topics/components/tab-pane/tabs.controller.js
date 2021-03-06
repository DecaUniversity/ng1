"use strict";

var TabsController = function TabsController() {

	var ctrl = this;

	var panes = [];

	ctrl.panes = panes;

	/**
  * Select a pane
  * @param pane The pane to be selected
  */
	ctrl.select = function (pane) {

		// Unselect all panes
		angular.forEach(panes, function (paneItem) {

			paneItem.selected = false;
		});

		console.log("Making " + pane.title + " selected!");

		// Select the passed pane
		pane.selected = true;
	};

	/**
  * Add pane to the array of panes
  * @param pane The pane to be added
  */
	ctrl.addPane = function (pane) {

		/**
   * If there are no panes, select the new pane so that there is
   * always at least one active pane.
   */

		if (panes.length === this.defaultTab) {

			ctrl.select(pane);
		}

		panes.push(pane);
	};
};

angular.module("main").controller("TabsController", TabsController);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy9jb21wb25lbnRzL3RhYi1wYW5lL3RhYnMuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJUYWJzQ29udHJvbGxlciIsImN0cmwiLCJwYW5lcyIsInNlbGVjdCIsInBhbmUiLCJhbmd1bGFyIiwiZm9yRWFjaCIsInBhbmVJdGVtIiwic2VsZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJhZGRQYW5lIiwibGVuZ3RoIiwiZGVmYXVsdFRhYiIsInB1c2giLCJtb2R1bGUiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQVk7O0FBRWxDLEtBQU1DLE9BQU8sSUFBYjs7QUFFQSxLQUFNQyxRQUFRLEVBQWQ7O0FBRUFELE1BQUtDLEtBQUwsR0FBYUEsS0FBYjs7QUFFQTs7OztBQUlBRCxNQUFLRSxNQUFMLEdBQWMsVUFBVUMsSUFBVixFQUFnQjs7QUFFN0I7QUFDQUMsVUFBUUMsT0FBUixDQUFnQkosS0FBaEIsRUFBdUIsVUFBVUssUUFBVixFQUFvQjs7QUFFMUNBLFlBQVNDLFFBQVQsR0FBb0IsS0FBcEI7QUFFQSxHQUpEOztBQU1BQyxVQUFRQyxHQUFSLGFBQXNCTixLQUFLTyxLQUEzQjs7QUFFQTtBQUNBUCxPQUFLSSxRQUFMLEdBQWdCLElBQWhCO0FBRUEsRUFkRDs7QUFnQkE7Ozs7QUFJQVAsTUFBS1csT0FBTCxHQUFlLFVBQVVSLElBQVYsRUFBZ0I7O0FBRTlCOzs7OztBQUtBLE1BQUlGLE1BQU1XLE1BQU4sS0FBaUIsS0FBS0MsVUFBMUIsRUFBc0M7O0FBRXJDYixRQUFLRSxNQUFMLENBQVlDLElBQVo7QUFFQTs7QUFFREYsUUFBTWEsSUFBTixDQUFXWCxJQUFYO0FBRUEsRUFmRDtBQWlCQSxDQWpERDs7QUFtREFDLFFBQVFXLE1BQVIsQ0FBZSxNQUFmLEVBQ0VDLFVBREYsQ0FDYSxnQkFEYixFQUMrQmpCLGNBRC9CIiwiZmlsZSI6InRvcGljcy9jb21wb25lbnRzL3RhYi1wYW5lL3RhYnMuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBUYWJzQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblx0XG5cdGNvbnN0IGN0cmwgPSB0aGlzO1xuXHRcblx0Y29uc3QgcGFuZXMgPSBbXTtcblx0XG5cdGN0cmwucGFuZXMgPSBwYW5lcztcblx0XG5cdC8qKlxuXHQgKiBTZWxlY3QgYSBwYW5lXG5cdCAqIEBwYXJhbSBwYW5lIFRoZSBwYW5lIHRvIGJlIHNlbGVjdGVkXG5cdCAqL1xuXHRjdHJsLnNlbGVjdCA9IGZ1bmN0aW9uIChwYW5lKSB7XG5cdFx0XG5cdFx0Ly8gVW5zZWxlY3QgYWxsIHBhbmVzXG5cdFx0YW5ndWxhci5mb3JFYWNoKHBhbmVzLCBmdW5jdGlvbiAocGFuZUl0ZW0pIHtcblx0XHRcdFxuXHRcdFx0cGFuZUl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFxuXHRcdH0pO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKGBNYWtpbmcgJHtwYW5lLnRpdGxlfSBzZWxlY3RlZCFgKTtcblx0XHRcblx0XHQvLyBTZWxlY3QgdGhlIHBhc3NlZCBwYW5lXG5cdFx0cGFuZS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XG5cdH07XG5cdFxuXHQvKipcblx0ICogQWRkIHBhbmUgdG8gdGhlIGFycmF5IG9mIHBhbmVzXG5cdCAqIEBwYXJhbSBwYW5lIFRoZSBwYW5lIHRvIGJlIGFkZGVkXG5cdCAqL1xuXHRjdHJsLmFkZFBhbmUgPSBmdW5jdGlvbiAocGFuZSkge1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIElmIHRoZXJlIGFyZSBubyBwYW5lcywgc2VsZWN0IHRoZSBuZXcgcGFuZSBzbyB0aGF0IHRoZXJlIGlzXG5cdFx0ICogYWx3YXlzIGF0IGxlYXN0IG9uZSBhY3RpdmUgcGFuZS5cblx0XHQgKi9cblx0XHRcblx0XHRpZiAocGFuZXMubGVuZ3RoID09PSB0aGlzLmRlZmF1bHRUYWIpIHtcblx0XHRcdFxuXHRcdFx0Y3RybC5zZWxlY3QocGFuZSk7XG5cdFx0XHRcblx0XHR9XG5cdFx0XG5cdFx0cGFuZXMucHVzaChwYW5lKTtcblx0XHRcblx0fTtcblx0XG59O1xuXG5hbmd1bGFyLm1vZHVsZShcIm1haW5cIilcblx0LmNvbnRyb2xsZXIoXCJUYWJzQ29udHJvbGxlclwiLCBUYWJzQ29udHJvbGxlcik7XG4iXX0=
