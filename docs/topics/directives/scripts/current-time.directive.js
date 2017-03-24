"use strict";

angular.module("directives").directive("dhCurrentTime", ["$interval", "dateFilter", function ($interval, dateFilter) {

	var link = function link(scope, element, attrs) {

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

		var format = null;
		var timeoutId = null;
		var intervalTime = 1000;

		var updateTime = function updateTime() {

			element.text(dateFilter(new Date(), format));
		};

		scope.$watch(attrs.dhCurrentTime, function (value, oldVal) {

			console.log("value: " + value);

			if (value === oldVal) {

				/**
     * This would detect the initialization of the watcher.
     * If we were to prevent format to be updated to the attributes
     * value during initialization, the time format would be the
     * default new Date() return value - even if there if the model
     * that is being mapped through the
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
		}, intervalTime);
	};

	return { link: link };
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy9kaXJlY3RpdmVzL3NjcmlwdHMvY3VycmVudC10aW1lLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwiJGludGVydmFsIiwiZGF0ZUZpbHRlciIsImxpbmsiLCJzY29wZSIsImVsZW1lbnQiLCJhdHRycyIsImZvcm1hdCIsInRpbWVvdXRJZCIsImludGVydmFsVGltZSIsInVwZGF0ZVRpbWUiLCJ0ZXh0IiwiRGF0ZSIsIiR3YXRjaCIsImRoQ3VycmVudFRpbWUiLCJ2YWx1ZSIsIm9sZFZhbCIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImNhbmNlbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQ0VDLFNBREYsQ0FDWSxlQURaLEVBQzZCLENBQUMsV0FBRCxFQUFjLFlBQWQsRUFBNEIsVUFBVUMsU0FBVixFQUFxQkMsVUFBckIsRUFBaUM7O0FBRXhGLEtBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFVQyxLQUFWLEVBQWlCQyxPQUFqQixFQUEwQkMsS0FBMUIsRUFBaUM7O0FBRTdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBLE1BQUlDLFNBQVMsSUFBYjtBQUNBLE1BQUlDLFlBQVksSUFBaEI7QUFDQSxNQUFNQyxlQUFlLElBQXJCOztBQUVBLE1BQU1DLGFBQWEsU0FBYkEsVUFBYSxHQUFZOztBQUU5QkwsV0FBUU0sSUFBUixDQUFhVCxXQUFXLElBQUlVLElBQUosRUFBWCxFQUF1QkwsTUFBdkIsQ0FBYjtBQUVBLEdBSkQ7O0FBTUFILFFBQU1TLE1BQU4sQ0FBYVAsTUFBTVEsYUFBbkIsRUFBa0MsVUFBVUMsS0FBVixFQUFpQkMsTUFBakIsRUFBeUI7O0FBRTFEQyxXQUFRQyxHQUFSLGFBQXNCSCxLQUF0Qjs7QUFFQSxPQUFJQSxVQUFVQyxNQUFkLEVBQXNCOztBQUVyQjs7Ozs7Ozs7Ozs7O0FBWUFDLFlBQVFDLEdBQVIsQ0FBWSwyQ0FBWjtBQUVBOztBQUVEWCxZQUFTUSxLQUFUO0FBQ0FMO0FBR0EsR0ExQkQ7O0FBNEJBTCxVQUFRYyxFQUFSLENBQVcsVUFBWCxFQUF1QixZQUFZOztBQUVsQ2xCLGFBQVVtQixNQUFWLENBQWlCWixTQUFqQjtBQUVBLEdBSkQ7O0FBTUE7QUFDQUEsY0FBWVAsVUFBVSxZQUFZOztBQUVqQ1M7QUFFQSxHQUpXLEVBSVRELFlBSlMsQ0FBWjtBQU1BLEVBOUZEOztBQWdHQSxRQUFPLEVBQUNOLFVBQUQsRUFBUDtBQUVBLENBcEcyQixDQUQ3QiIsImZpbGUiOiJ0b3BpY3MvZGlyZWN0aXZlcy9zY3JpcHRzL2N1cnJlbnQtdGltZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJkaXJlY3RpdmVzXCIpXG5cdC5kaXJlY3RpdmUoXCJkaEN1cnJlbnRUaW1lXCIsIFtcIiRpbnRlcnZhbFwiLCBcImRhdGVGaWx0ZXJcIiwgZnVuY3Rpb24gKCRpbnRlcnZhbCwgZGF0ZUZpbHRlcikge1xuXHRcdFxuXHRcdGNvbnN0IGxpbmsgPSBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRcblx0XHRcdC8qKlxuXHRcdFx0ICogQW4gZWxlbWVudCBpbiB0aGUgRE9NIGdldHMgdGhpcyBkaXJlY3RpdmUgYXNzaWduZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogMS4gQ3JlYXRlIGFuIGVuZ2luZSB0aGF0IHJ1bnMgYSB0YXNrIGV2ZXJ5IHNlY29uZC5cblx0XHRcdCAqIGVuZ2luZTogdGltZW91dElEXG5cdFx0XHQgKiB0YXNrOiB1cGRhdGVUaW1lKClcblx0XHRcdCAqXG5cdFx0XHQgKiAyLiBUaGUgdGFzayBpcyB0b2xkIHRvIGNoYW5nZSB0aGUgY29udGVudCBpbnNpZGUgdGhlIGVsZW1lbnRcblx0XHRcdCAqIHRvIGEgZGF0ZSBhbmQgbWF5IGhhdmUgYSB2YXJpYWJsZSBmb3JtYXR0aW5nIG9mIHN1Y2ggZGF0ZS5cblx0XHRcdCAqIFRoZSBkYXRhIGlzIGNvbnN0YW50IChhIGRhdGUpIGJ1dCB0aGUgcHJlc2VudGF0aW9uIG1heSBjaGFuZ2Vcblx0XHRcdCAqIChmb3JtYXQpXG5cdFx0XHQgKlxuXHRcdFx0ICogMy4gVGhlIHRhc2tzIG5lZWRzIGEgd2F5IHRvIGJlIHRvbGQgd2hhdCBmb3JtYXQgdG8gdXNlLlxuXHRcdFx0ICogQSB2YXJpYWJsZSBpcyBjcmVhdGVkIHRvIGNvbnRhaW4gdGhhdCBmb3JtYXQgaW5zdHJ1Y3Rpb24uXG5cdFx0XHQgKlxuXHRcdFx0ICogSG93ZXZlciwgaG93IGNhbiBtZSBtb2RpZnkgdGhhdCBmb3JtYXQgZnJvbSB0aGUgb3V0ZXIgc2NvcGU/XG5cdFx0XHQgKiBXZSBuZWVkIGEgd2F5IHRvIGJlIGFibGUgdG8gZ2V0IHRoYXQgaW5zdHJ1Y3Rpb24gZnJvbSB0aGUgZW5kLXVzZXJcblx0XHRcdCAqIGludG8gdGhpcyBmdW5jdGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGlzIGlzIGFuIGF0dHJpYnV0ZSBkaXJlY3RpdmUgYmVjYXVzZSBpdCBpcyBhIGRlY29yYXRvci4gSXQgaXMgYWRkaW5nXG5cdFx0XHQgKiBmdW5jdGlvbiB0byBhIHRleHQgY29udGFpbmVyIGluIHRoZSBET00uIEhlbmNlLCBpdCBpcyBhbiBhdHRyaWJ1dGUuXG5cdFx0XHQgKiBBbiBhdHRyaWJ1dGUgdGFrZXMgYSB2YWx1ZS4gV2hhdCB3ZSBjYW4gZG8gaXMgdG8gbWFwIGEgbW9kZWwgcHJvcGVydHlcblx0XHRcdCAqIG9mIHRoZSBvdXRlciBzY29wZSB0byB0aGUgdmFsdWUgb2YgdGhpcyBhdHRyaWJ1dGUgZGlyZWN0aXZlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFdlIGNhbiBtYXAgaXQsIGJ1dCBpdCB3aWxsIGJlIHRoZW4gc3RhdGljLiBXaGF0ZXZlciB0aGUgZm9ybWF0IG1vZGVsIGlzLFxuXHRcdFx0ICogaXQgd2lsbCBiZSB0aGUgb25seSBmb3JtYXQgdGhpcyBhdHRyaWJ1dGUgZGlyZWN0aXZlIHdpbGwgZXZlciBoYXZlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFdlIGNhbiBjaGFuZ2UgdGhhdCBieSBzZXR0aW5nIGEgd2F0Y2hlci5cblx0XHRcdCAqXG5cdFx0XHQgKiA0LiBXYXRjaCB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBkaXJlY3RpdmUgdXNpbmcgdGhlIGVsZW1lbnRcblx0XHRcdCAqIGFzIHRoZSByZWZlcmVuY2UgcG9pbnQuIFNpbmNlIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGRpcmVjdGl2ZVxuXHRcdFx0ICogaXMgY29ubmVjdGVkIHRvIHRoZSBvdXRlciBzY29wZSBtb2RlbCwgd2hlbiB0aGF0IG1vZGVsIGNoYW5nZXMsIGl0IHdpbGxcblx0XHRcdCAqIGNoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBkaXJlY3RpdmUgYW5kIHRyaWdnZXIgdGhlIHdhdGNoLlxuXHRcdFx0ICogVGhlIHdhdGNoIHdpbGwgdGhlbiB1cGRhdGUgdGhlIGZvcm1hdCB3aXRoIHRoZSBuZXcgdmFsdWUgYW5kIGNhbGxcblx0XHRcdCAqIHVwZGF0ZSgpIHNvIHRoYXQgdGhlIHRhc2sgY2FuIGJlIHJlZnJlc2ggaXQgZm9ybWF0IHZhbHVlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFdpdGggdGhlc2Ugc3RlcHMgaW4gZWZmZWN0LCB3ZSBjYW4gZ2V0IGEgdGltZXIgdGhhdCB1cGRhdGVzIGl0c2VsZlxuXHRcdFx0ICogZXZlciBzZWNvbmQuXG5cdFx0XHQgKi9cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRsZXQgZm9ybWF0ID0gbnVsbDtcblx0XHRcdGxldCB0aW1lb3V0SWQgPSBudWxsO1xuXHRcdFx0Y29uc3QgaW50ZXJ2YWxUaW1lID0gMTAwMDtcblx0XHRcdFxuXHRcdFx0Y29uc3QgdXBkYXRlVGltZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGVsZW1lbnQudGV4dChkYXRlRmlsdGVyKG5ldyBEYXRlKCksIGZvcm1hdCkpO1xuXHRcdFx0XHRcblx0XHRcdH07XG5cdFx0XHRcblx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5kaEN1cnJlbnRUaW1lLCBmdW5jdGlvbiAodmFsdWUsIG9sZFZhbCkge1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc29sZS5sb2coYHZhbHVlOiAke3ZhbHVlfWApO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGRWYWwpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBUaGlzIHdvdWxkIGRldGVjdCB0aGUgaW5pdGlhbGl6YXRpb24gb2YgdGhlIHdhdGNoZXIuXG5cdFx0XHRcdFx0ICogSWYgd2Ugd2VyZSB0byBwcmV2ZW50IGZvcm1hdCB0byBiZSB1cGRhdGVkIHRvIHRoZSBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0ICogdmFsdWUgZHVyaW5nIGluaXRpYWxpemF0aW9uLCB0aGUgdGltZSBmb3JtYXQgd291bGQgYmUgdGhlXG5cdFx0XHRcdFx0ICogZGVmYXVsdCBuZXcgRGF0ZSgpIHJldHVybiB2YWx1ZSAtIGV2ZW4gaWYgdGhlcmUgaWYgdGhlIG1vZGVsXG5cdFx0XHRcdFx0ICogdGhhdCBpcyBiZWluZyBtYXBwZWQgdGhyb3VnaCB0aGVcblx0XHRcdFx0XHQgKiBhdHRyaWJ1dGUgYm91bmQgdG8gdGhlIGRpcmVjdGl2ZSBoYXMgYSB2YWx1ZS5cblx0XHRcdFx0XHQgKiBUaGUgZm9ybWF0IHdvbid0IGNoYW5nZSB0aWxsIHRoZSBtb2RlbCBhY3R1YWxseSBpcyBjaGFuZ2VkIVxuXHRcdFx0XHRcdCAqIFRoaXMgaXMgbm90IGRlc2lyZWQgZm9yIHRoaXMgZGVjb3JhdG9yIHNpbmNlIHdlIHdhbnQgdG8gYmUgYWJsZSB0b1xuXHRcdFx0XHRcdCAqIHByZXNlbnQgdGhlIG1vZGVsIHdpdGggd2hhdGV2ZXIgZGVmYXVsdCBmb3JtYXQgdGhlIG91dGVyIGNvbnRyb2xsZXJcblx0XHRcdFx0XHQgKiBoYXMgc3BlY2lmaWVkLlxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6ZWQgc2NvcGUuJHdhdGNoIG9uIGRoQ3VycmVudFRpbWVcIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGZvcm1hdCA9IHZhbHVlO1xuXHRcdFx0XHR1cGRhdGVUaW1lKCk7XG5cdFx0XHRcblxuXHRcdFx0fSk7XG5cblx0XHRcdGVsZW1lbnQub24oXCIkZGVzdHJveVwiLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0JGludGVydmFsLmNhbmNlbCh0aW1lb3V0SWQpO1xuXG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0Ly8gU3RhcnQgdGhlIFVJIHVwZGF0ZSBwcm9jZXNzOyBzYXZlIHRoZSB0aW1lb3V0SWQgZm9yIGNhbmNlbGluZ1xuXHRcdFx0dGltZW91dElkID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHVwZGF0ZVRpbWUoKTtcblx0XHRcdFx0XG5cdFx0XHR9LCBpbnRlcnZhbFRpbWUpO1xuXHRcdFx0XG5cdFx0fTtcblx0XHRcblx0XHRyZXR1cm4ge2xpbmt9O1xuXHRcdFxuXHR9XSk7XG4iXX0=
