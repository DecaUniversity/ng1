"use strict";

var MyTabsController = function MyTabsController() {

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

		// Select latest pane for faster testing

		var preLast = 2;

		/**
   * If there are no panes, select the new pane so that there is
   * always at least one active pane.
   */

		if (panes.length === 0) {

			/**
    * Uncomment to restore first pane being selected by default
    * Keep using while on testing
    * ctrl.select(pane);
    */

			console.log(pane);
		} else if (panes.length === preLast) {

			ctrl.select(pane);
		}

		panes.push(pane);
	};
};

angular.module("app").component("myTabs", {

	transclude: true,
	controller: MyTabsController,
	templateUrl: "/components/tab-pane/my-tabs.html"

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFiLXBhbmUvbXktdGFicy5jb21wb25lbnQuanMiXSwibmFtZXMiOlsiTXlUYWJzQ29udHJvbGxlciIsImN0cmwiLCJwYW5lcyIsInNlbGVjdCIsInBhbmUiLCJhbmd1bGFyIiwiZm9yRWFjaCIsInBhbmVJdGVtIiwic2VsZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJhZGRQYW5lIiwicHJlTGFzdCIsImxlbmd0aCIsInB1c2giLCJtb2R1bGUiLCJjb21wb25lbnQiLCJ0cmFuc2NsdWRlIiwiY29udHJvbGxlciIsInRlbXBsYXRlVXJsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxtQkFBbUIsU0FBbkJBLGdCQUFtQixHQUFZOztBQUVwQyxLQUFNQyxPQUFPLElBQWI7O0FBRUEsS0FBTUMsUUFBUSxFQUFkOztBQUVBRCxNQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBRUE7Ozs7QUFJQUQsTUFBS0UsTUFBTCxHQUFjLFVBQVVDLElBQVYsRUFBZ0I7O0FBRTdCO0FBQ0FDLFVBQVFDLE9BQVIsQ0FBZ0JKLEtBQWhCLEVBQXVCLFVBQVVLLFFBQVYsRUFBb0I7O0FBRTFDQSxZQUFTQyxRQUFULEdBQW9CLEtBQXBCO0FBRUEsR0FKRDs7QUFNQUMsVUFBUUMsR0FBUixhQUFzQk4sS0FBS08sS0FBM0I7O0FBRUE7QUFDQVAsT0FBS0ksUUFBTCxHQUFnQixJQUFoQjtBQUVBLEVBZEQ7O0FBZ0JBOzs7O0FBSUFQLE1BQUtXLE9BQUwsR0FBZSxVQUFVUixJQUFWLEVBQWdCOztBQUU5Qjs7QUFFQSxNQUFNUyxVQUFVLENBQWhCOztBQUVBOzs7OztBQUtBLE1BQUlYLE1BQU1ZLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7O0FBRXZCOzs7Ozs7QUFPQUwsV0FBUUMsR0FBUixDQUFZTixJQUFaO0FBRUEsR0FYRCxNQVdPLElBQUlGLE1BQU1ZLE1BQU4sS0FBaUJELE9BQXJCLEVBQThCOztBQUVwQ1osUUFBS0UsTUFBTCxDQUFZQyxJQUFaO0FBRUE7O0FBRURGLFFBQU1hLElBQU4sQ0FBV1gsSUFBWDtBQUVBLEVBOUJEO0FBZ0NBLENBaEVEOztBQWtFQUMsUUFBUVcsTUFBUixDQUFlLEtBQWYsRUFDRUMsU0FERixDQUNZLFFBRFosRUFDc0I7O0FBRXBCQyxhQUFZLElBRlE7QUFHcEJDLGFBQVluQixnQkFIUTtBQUlwQm9CLGNBQWE7O0FBSk8sQ0FEdEIiLCJmaWxlIjoiY29tcG9uZW50cy90YWItcGFuZS9teS10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBNeVRhYnNDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRcblx0Y29uc3QgY3RybCA9IHRoaXM7XG5cdFxuXHRjb25zdCBwYW5lcyA9IFtdO1xuXHRcblx0Y3RybC5wYW5lcyA9IHBhbmVzO1xuXHRcblx0LyoqXG5cdCAqIFNlbGVjdCBhIHBhbmVcblx0ICogQHBhcmFtIHBhbmUgVGhlIHBhbmUgdG8gYmUgc2VsZWN0ZWRcblx0ICovXG5cdGN0cmwuc2VsZWN0ID0gZnVuY3Rpb24gKHBhbmUpIHtcblx0XHRcblx0XHQvLyBVbnNlbGVjdCBhbGwgcGFuZXNcblx0XHRhbmd1bGFyLmZvckVhY2gocGFuZXMsIGZ1bmN0aW9uIChwYW5lSXRlbSkge1xuXHRcdFx0XG5cdFx0XHRwYW5lSXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XG5cdFx0fSk7XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coYE1ha2luZyAke3BhbmUudGl0bGV9IHNlbGVjdGVkIWApO1xuXHRcdFxuXHRcdC8vIFNlbGVjdCB0aGUgcGFzc2VkIHBhbmVcblx0XHRwYW5lLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBBZGQgcGFuZSB0byB0aGUgYXJyYXkgb2YgcGFuZXNcblx0ICogQHBhcmFtIHBhbmUgVGhlIHBhbmUgdG8gYmUgYWRkZWRcblx0ICovXG5cdGN0cmwuYWRkUGFuZSA9IGZ1bmN0aW9uIChwYW5lKSB7XG5cdFx0XG5cdFx0Ly8gU2VsZWN0IGxhdGVzdCBwYW5lIGZvciBmYXN0ZXIgdGVzdGluZ1xuXHRcdFxuXHRcdGNvbnN0IHByZUxhc3QgPSAyO1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIElmIHRoZXJlIGFyZSBubyBwYW5lcywgc2VsZWN0IHRoZSBuZXcgcGFuZSBzbyB0aGF0IHRoZXJlIGlzXG5cdFx0ICogYWx3YXlzIGF0IGxlYXN0IG9uZSBhY3RpdmUgcGFuZS5cblx0XHQgKi9cblx0XHRcblx0XHRpZiAocGFuZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcblx0XHRcdC8qKlxuXHRcdFx0ICogVW5jb21tZW50IHRvIHJlc3RvcmUgZmlyc3QgcGFuZSBiZWluZyBzZWxlY3RlZCBieSBkZWZhdWx0XG5cdFx0XHQgKiBLZWVwIHVzaW5nIHdoaWxlIG9uIHRlc3Rpbmdcblx0XHRcdCAqIGN0cmwuc2VsZWN0KHBhbmUpO1xuXHRcdFx0ICovXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Y29uc29sZS5sb2cocGFuZSk7XG5cdFx0XHRcblx0XHR9IGVsc2UgaWYgKHBhbmVzLmxlbmd0aCA9PT0gcHJlTGFzdCkge1xuXHRcdFx0XG5cdFx0XHRjdHJsLnNlbGVjdChwYW5lKTtcblx0XHRcdFxuXHRcdH1cblx0XHRcblx0XHRwYW5lcy5wdXNoKHBhbmUpO1xuXHRcdFxuXHR9O1xuXHRcbn07XG5cbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpXG5cdC5jb21wb25lbnQoXCJteVRhYnNcIiwge1xuXHRcdFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0Y29udHJvbGxlcjogTXlUYWJzQ29udHJvbGxlcixcblx0XHR0ZW1wbGF0ZVVybDogXCIvY29tcG9uZW50cy90YWItcGFuZS9teS10YWJzLmh0bWxcIlxuXHRcdFxuXHR9KTtcblxuIl19
