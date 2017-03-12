"use strict";

angular.module("SimpleDirective")
	.directive("dhCurrentTime", ["$interval", "dateFilter", function ($interval, dateFilter) {
		
		function link (scope, element, attrs) {
			
			/**
			 * An element in the DOM gets this directive assigned.
			 *
			 * 1. Create an engine that runs a task every second.
			 * engine: timeoutID
			 * task: updateTime()
			 *
			 * 2. The task is told to change the content inside the element
			 * to a date and may have a variable formatting of such date.
			 * The data is constant (a date) but the presentation may change
			 * (format)
			 *
			 * 3. The tasks needs a way to be told what format to use.
			 * A variable is created to contain that format instruction.
			 *
			 * However, how can me modify that format from the outer scope?
			 * We need a way to be able to get that instruction from the end-user
			 * into this function.
			 *
			 * This is an attribute directive because it is a decorator. It is adding
			 * function to a text container in the DOM. Hence, it is an attribute.
			 * An attribute takes a value. What we can do is to map a model property
			 * of the outer scope to the value of this attribute directive.
			 *
			 * We can map it, but it will be then static. Whatever the format model is,
			 * it will be the only format this attribute directive will ever have.
			 *
			 * We can change that by setting a watcher.
			 *
			 * 4. Watch the value of the attribute directive using the element
			 * as the reference point. Since the value of the attribute directive
			 * is connected to the outer scope model, when that model changes, it will
			 * change the value of the attribute directive and trigger the watch.
			 * The watch will then update the format with the new value and call
			 * update() so that the task can be refresh it format value.
			 *
			 * With these steps in effect, we can get a timer that updates itself
			 * ever second.
			 */
			
			
			let format;
			let timeoutId;
			
			function updateTime() {
				
				element.text(dateFilter(new Date(), format));
				
			}
			
			scope.$watch(attrs.dhCurrentTime, function (value) {

				format = value;
				updateTime();

			});

			element.on("$destroy", function () {

				$interval.cancel(timeoutId);

			});
			
			// Start the UI update process; save the timeoutId for canceling
			timeoutId = $interval(function () {
				
				updateTime();
				
			}, 1000);
			
		}
		
		return {
			
			link
			
		}
		
	}]);