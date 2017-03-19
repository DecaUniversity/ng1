"use strict";

angular.module("directives").directive("dhCurrentTime", ["$interval", "dateFilter", function ($interval, dateFilter) {

	function link(scope, element, attrs) {

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

		var format = void 0;
		var timeoutId = void 0;

		function updateTime() {

			element.text(dateFilter(new Date(), format));
		}

		scope.$watch(attrs.dhCurrentTime, function (value, oldVal) {

			console.log("value: " + value);

			if (value === oldVal) {

				/**
     * This would detect the initialization of the watcher.
     * If we were to prevent format to be updated to the attributes value
     * during initialization, the time format would be the default new Date()
     * return value - even if there if the model that is being mapped through the
     * attribute bound to the directive has a value.
     * The format won't change till the model actually is changed!
     * This is not desired for this decorator since we want to be able to
     * present the model with whatever default format the outer controller
     * has specified.
     */
				console.log("Initialized scope.$watch on dhCurrentTime");
			}

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

		link: link

	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy9kaXJlY3RpdmVzL3NjcmlwdHMvY3VycmVudC10aW1lLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwiJGludGVydmFsIiwiZGF0ZUZpbHRlciIsImxpbmsiLCJzY29wZSIsImVsZW1lbnQiLCJhdHRycyIsImZvcm1hdCIsInRpbWVvdXRJZCIsInVwZGF0ZVRpbWUiLCJ0ZXh0IiwiRGF0ZSIsIiR3YXRjaCIsImRoQ3VycmVudFRpbWUiLCJ2YWx1ZSIsIm9sZFZhbCIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImNhbmNlbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQ0VDLFNBREYsQ0FDWSxlQURaLEVBQzZCLENBQUMsV0FBRCxFQUFjLFlBQWQsRUFBNEIsVUFBVUMsU0FBVixFQUFxQkMsVUFBckIsRUFBaUM7O0FBRXhGLFVBQVNDLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsT0FBdEIsRUFBK0JDLEtBQS9CLEVBQXNDOztBQUVyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQSxNQUFJQyxlQUFKO0FBQ0EsTUFBSUMsa0JBQUo7O0FBRUEsV0FBU0MsVUFBVCxHQUFzQjs7QUFFckJKLFdBQVFLLElBQVIsQ0FBYVIsV0FBVyxJQUFJUyxJQUFKLEVBQVgsRUFBdUJKLE1BQXZCLENBQWI7QUFFQTs7QUFFREgsUUFBTVEsTUFBTixDQUFhTixNQUFNTyxhQUFuQixFQUFrQyxVQUFVQyxLQUFWLEVBQWlCQyxNQUFqQixFQUF5Qjs7QUFFMURDLFdBQVFDLEdBQVIsYUFBc0JILEtBQXRCOztBQUVBLE9BQUlBLFVBQVVDLE1BQWQsRUFBc0I7O0FBRXJCOzs7Ozs7Ozs7OztBQVdBQyxZQUFRQyxHQUFSO0FBRUE7O0FBRURWLFlBQVNPLEtBQVQ7QUFDQUw7QUFHQSxHQXpCRDs7QUEyQkFKLFVBQVFhLEVBQVIsQ0FBVyxVQUFYLEVBQXVCLFlBQVk7O0FBRWxDakIsYUFBVWtCLE1BQVYsQ0FBaUJYLFNBQWpCO0FBRUEsR0FKRDs7QUFNQTtBQUNBQSxjQUFZUCxVQUFVLFlBQVk7O0FBRWpDUTtBQUVBLEdBSlcsRUFJVCxJQUpTLENBQVo7QUFNQTs7QUFFRCxRQUFPOztBQUVOTjs7QUFGTSxFQUFQO0FBTUEsQ0F0RzJCLENBRDdCIiwiZmlsZSI6InRvcGljcy9kaXJlY3RpdmVzL3NjcmlwdHMvY3VycmVudC10aW1lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZShcImRpcmVjdGl2ZXNcIilcblx0LmRpcmVjdGl2ZShcImRoQ3VycmVudFRpbWVcIiwgW1wiJGludGVydmFsXCIsIFwiZGF0ZUZpbHRlclwiLCBmdW5jdGlvbiAoJGludGVydmFsLCBkYXRlRmlsdGVyKSB7XG5cdFx0XG5cdFx0ZnVuY3Rpb24gbGluayAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRcblx0XHRcdC8qKlxuXHRcdFx0ICogQW4gZWxlbWVudCBpbiB0aGUgRE9NIGdldHMgdGhpcyBkaXJlY3RpdmUgYXNzaWduZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogMS4gQ3JlYXRlIGFuIGVuZ2luZSB0aGF0IHJ1bnMgYSB0YXNrIGV2ZXJ5IHNlY29uZC5cblx0XHRcdCAqIGVuZ2luZTogdGltZW91dElEXG5cdFx0XHQgKiB0YXNrOiB1cGRhdGVUaW1lKClcblx0XHRcdCAqXG5cdFx0XHQgKiAyLiBUaGUgdGFzayBpcyB0b2xkIHRvIGNoYW5nZSB0aGUgY29udGVudCBpbnNpZGUgdGhlIGVsZW1lbnRcblx0XHRcdCAqIHRvIGEgZGF0ZSBhbmQgbWF5IGhhdmUgYSB2YXJpYWJsZSBmb3JtYXR0aW5nIG9mIHN1Y2ggZGF0ZS5cblx0XHRcdCAqIFRoZSBkYXRhIGlzIGNvbnN0YW50IChhIGRhdGUpIGJ1dCB0aGUgcHJlc2VudGF0aW9uIG1heSBjaGFuZ2Vcblx0XHRcdCAqIChmb3JtYXQpXG5cdFx0XHQgKlxuXHRcdFx0ICogMy4gVGhlIHRhc2tzIG5lZWRzIGEgd2F5IHRvIGJlIHRvbGQgd2hhdCBmb3JtYXQgdG8gdXNlLlxuXHRcdFx0ICogQSB2YXJpYWJsZSBpcyBjcmVhdGVkIHRvIGNvbnRhaW4gdGhhdCBmb3JtYXQgaW5zdHJ1Y3Rpb24uXG5cdFx0XHQgKlxuXHRcdFx0ICogSG93ZXZlciwgaG93IGNhbiBtZSBtb2RpZnkgdGhhdCBmb3JtYXQgZnJvbSB0aGUgb3V0ZXIgc2NvcGU/XG5cdFx0XHQgKiBXZSBuZWVkIGEgd2F5IHRvIGJlIGFibGUgdG8gZ2V0IHRoYXQgaW5zdHJ1Y3Rpb24gZnJvbSB0aGUgZW5kLXVzZXJcblx0XHRcdCAqIGludG8gdGhpcyBmdW5jdGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGlzIGlzIGFuIGF0dHJpYnV0ZSBkaXJlY3RpdmUgYmVjYXVzZSBpdCBpcyBhIGRlY29yYXRvci4gSXQgaXMgYWRkaW5nXG5cdFx0XHQgKiBmdW5jdGlvbiB0byBhIHRleHQgY29udGFpbmVyIGluIHRoZSBET00uIEhlbmNlLCBpdCBpcyBhbiBhdHRyaWJ1dGUuXG5cdFx0XHQgKiBBbiBhdHRyaWJ1dGUgdGFrZXMgYSB2YWx1ZS4gV2hhdCB3ZSBjYW4gZG8gaXMgdG8gbWFwIGEgbW9kZWwgcHJvcGVydHlcblx0XHRcdCAqIG9mIHRoZSBvdXRlciBzY29wZSB0byB0aGUgdmFsdWUgb2YgdGhpcyBhdHRyaWJ1dGUgZGlyZWN0aXZlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFdlIGNhbiBtYXAgaXQsIGJ1dCBpdCB3aWxsIGJlIHRoZW4gc3RhdGljLiBXaGF0ZXZlciB0aGUgZm9ybWF0IG1vZGVsIGlzLFxuXHRcdFx0ICogaXQgd2lsbCBiZSB0aGUgb25seSBmb3JtYXQgdGhpcyBhdHRyaWJ1dGUgZGlyZWN0aXZlIHdpbGwgZXZlciBoYXZlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFdlIGNhbiBjaGFuZ2UgdGhhdCBieSBzZXR0aW5nIGEgd2F0Y2hlci5cblx0XHRcdCAqXG5cdFx0XHQgKiA0LiBXYXRjaCB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBkaXJlY3RpdmUgdXNpbmcgdGhlIGVsZW1lbnRcblx0XHRcdCAqIGFzIHRoZSByZWZlcmVuY2UgcG9pbnQuIFNpbmNlIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGRpcmVjdGl2ZVxuXHRcdFx0ICogaXMgY29ubmVjdGVkIHRvIHRoZSBvdXRlciBzY29wZSBtb2RlbCwgd2hlbiB0aGF0IG1vZGVsIGNoYW5nZXMsIGl0IHdpbGxcblx0XHRcdCAqIGNoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBkaXJlY3RpdmUgYW5kIHRyaWdnZXIgdGhlIHdhdGNoLlxuXHRcdFx0ICogVGhlIHdhdGNoIHdpbGwgdGhlbiB1cGRhdGUgdGhlIGZvcm1hdCB3aXRoIHRoZSBuZXcgdmFsdWUgYW5kIGNhbGxcblx0XHRcdCAqIHVwZGF0ZSgpIHNvIHRoYXQgdGhlIHRhc2sgY2FuIGJlIHJlZnJlc2ggaXQgZm9ybWF0IHZhbHVlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFdpdGggdGhlc2Ugc3RlcHMgaW4gZWZmZWN0LCB3ZSBjYW4gZ2V0IGEgdGltZXIgdGhhdCB1cGRhdGVzIGl0c2VsZlxuXHRcdFx0ICogZXZlciBzZWNvbmQuXG5cdFx0XHQgKi9cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRsZXQgZm9ybWF0O1xuXHRcdFx0bGV0IHRpbWVvdXRJZDtcblx0XHRcdFxuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlVGltZSgpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGVsZW1lbnQudGV4dChkYXRlRmlsdGVyKG5ldyBEYXRlKCksIGZvcm1hdCkpO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2NvcGUuJHdhdGNoKGF0dHJzLmRoQ3VycmVudFRpbWUsIGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zb2xlLmxvZyhgdmFsdWU6ICR7dmFsdWV9YCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG9sZFZhbCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIFRoaXMgd291bGQgZGV0ZWN0IHRoZSBpbml0aWFsaXphdGlvbiBvZiB0aGUgd2F0Y2hlci5cblx0XHRcdFx0XHQgKiBJZiB3ZSB3ZXJlIHRvIHByZXZlbnQgZm9ybWF0IHRvIGJlIHVwZGF0ZWQgdG8gdGhlIGF0dHJpYnV0ZXMgdmFsdWVcblx0XHRcdFx0XHQgKiBkdXJpbmcgaW5pdGlhbGl6YXRpb24sIHRoZSB0aW1lIGZvcm1hdCB3b3VsZCBiZSB0aGUgZGVmYXVsdCBuZXcgRGF0ZSgpXG5cdFx0XHRcdFx0ICogcmV0dXJuIHZhbHVlIC0gZXZlbiBpZiB0aGVyZSBpZiB0aGUgbW9kZWwgdGhhdCBpcyBiZWluZyBtYXBwZWQgdGhyb3VnaCB0aGVcblx0XHRcdFx0XHQgKiBhdHRyaWJ1dGUgYm91bmQgdG8gdGhlIGRpcmVjdGl2ZSBoYXMgYSB2YWx1ZS5cblx0XHRcdFx0XHQgKiBUaGUgZm9ybWF0IHdvbid0IGNoYW5nZSB0aWxsIHRoZSBtb2RlbCBhY3R1YWxseSBpcyBjaGFuZ2VkIVxuXHRcdFx0XHRcdCAqIFRoaXMgaXMgbm90IGRlc2lyZWQgZm9yIHRoaXMgZGVjb3JhdG9yIHNpbmNlIHdlIHdhbnQgdG8gYmUgYWJsZSB0b1xuXHRcdFx0XHRcdCAqIHByZXNlbnQgdGhlIG1vZGVsIHdpdGggd2hhdGV2ZXIgZGVmYXVsdCBmb3JtYXQgdGhlIG91dGVyIGNvbnRyb2xsZXJcblx0XHRcdFx0XHQgKiBoYXMgc3BlY2lmaWVkLlxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBJbml0aWFsaXplZCBzY29wZS4kd2F0Y2ggb24gZGhDdXJyZW50VGltZWApO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRmb3JtYXQgPSB2YWx1ZTtcblx0XHRcdFx0dXBkYXRlVGltZSgpO1xuXHRcdFx0XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRlbGVtZW50Lm9uKFwiJGRlc3Ryb3lcIiwgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdCRpbnRlcnZhbC5jYW5jZWwodGltZW91dElkKTtcblxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdC8vIFN0YXJ0IHRoZSBVSSB1cGRhdGUgcHJvY2Vzczsgc2F2ZSB0aGUgdGltZW91dElkIGZvciBjYW5jZWxpbmdcblx0XHRcdHRpbWVvdXRJZCA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHR1cGRhdGVUaW1lKCk7XG5cdFx0XHRcdFxuXHRcdFx0fSwgMTAwMCk7XG5cdFx0XHRcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHtcblx0XHRcdFxuXHRcdFx0bGlua1xuXHRcdFx0XG5cdFx0fVxuXHRcdFxuXHR9XSk7Il19
