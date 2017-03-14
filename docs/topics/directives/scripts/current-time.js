"use strict";

angular.module("SimpleDirective").directive("dhCurrentTime", ["$interval", "dateFilter", function ($interval, dateFilter) {

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

		link: link

	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy9kaXJlY3RpdmVzL3NjcmlwdHMvY3VycmVudC10aW1lLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCIkaW50ZXJ2YWwiLCJkYXRlRmlsdGVyIiwibGluayIsInNjb3BlIiwiZWxlbWVudCIsImF0dHJzIiwiZm9ybWF0IiwidGltZW91dElkIiwidXBkYXRlVGltZSIsInRleHQiLCJEYXRlIiwiJHdhdGNoIiwiZGhDdXJyZW50VGltZSIsInZhbHVlIiwib24iLCJjYW5jZWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRQyxNQUFSLENBQWUsaUJBQWYsRUFDRUMsU0FERixDQUNZLGVBRFosRUFDNkIsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QixVQUFVQyxTQUFWLEVBQXFCQyxVQUFyQixFQUFpQzs7QUFFeEYsVUFBU0MsSUFBVCxDQUFlQyxLQUFmLEVBQXNCQyxPQUF0QixFQUErQkMsS0FBL0IsRUFBc0M7O0FBRXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxrQkFBSjs7QUFFQSxXQUFTQyxVQUFULEdBQXNCOztBQUVyQkosV0FBUUssSUFBUixDQUFhUixXQUFXLElBQUlTLElBQUosRUFBWCxFQUF1QkosTUFBdkIsQ0FBYjtBQUVBOztBQUVESCxRQUFNUSxNQUFOLENBQWFOLE1BQU1PLGFBQW5CLEVBQWtDLFVBQVVDLEtBQVYsRUFBaUI7O0FBRWxEUCxZQUFTTyxLQUFUO0FBQ0FMO0FBRUEsR0FMRDs7QUFPQUosVUFBUVUsRUFBUixDQUFXLFVBQVgsRUFBdUIsWUFBWTs7QUFFbENkLGFBQVVlLE1BQVYsQ0FBaUJSLFNBQWpCO0FBRUEsR0FKRDs7QUFNQTtBQUNBQSxjQUFZUCxVQUFVLFlBQVk7O0FBRWpDUTtBQUVBLEdBSlcsRUFJVCxJQUpTLENBQVo7QUFNQTs7QUFFRCxRQUFPOztBQUVOTjs7QUFGTSxFQUFQO0FBTUEsQ0FsRjJCLENBRDdCIiwiZmlsZSI6InRvcGljcy9kaXJlY3RpdmVzL3NjcmlwdHMvY3VycmVudC10aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmFuZ3VsYXIubW9kdWxlKFwiU2ltcGxlRGlyZWN0aXZlXCIpXG5cdC5kaXJlY3RpdmUoXCJkaEN1cnJlbnRUaW1lXCIsIFtcIiRpbnRlcnZhbFwiLCBcImRhdGVGaWx0ZXJcIiwgZnVuY3Rpb24gKCRpbnRlcnZhbCwgZGF0ZUZpbHRlcikge1xuXHRcdFxuXHRcdGZ1bmN0aW9uIGxpbmsgKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0XG5cdFx0XHQvKipcblx0XHRcdCAqIEFuIGVsZW1lbnQgaW4gdGhlIERPTSBnZXRzIHRoaXMgZGlyZWN0aXZlIGFzc2lnbmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIDEuIENyZWF0ZSBhbiBlbmdpbmUgdGhhdCBydW5zIGEgdGFzayBldmVyeSBzZWNvbmQuXG5cdFx0XHQgKiBlbmdpbmU6IHRpbWVvdXRJRFxuXHRcdFx0ICogdGFzazogdXBkYXRlVGltZSgpXG5cdFx0XHQgKlxuXHRcdFx0ICogMi4gVGhlIHRhc2sgaXMgdG9sZCB0byBjaGFuZ2UgdGhlIGNvbnRlbnQgaW5zaWRlIHRoZSBlbGVtZW50XG5cdFx0XHQgKiB0byBhIGRhdGUgYW5kIG1heSBoYXZlIGEgdmFyaWFibGUgZm9ybWF0dGluZyBvZiBzdWNoIGRhdGUuXG5cdFx0XHQgKiBUaGUgZGF0YSBpcyBjb25zdGFudCAoYSBkYXRlKSBidXQgdGhlIHByZXNlbnRhdGlvbiBtYXkgY2hhbmdlXG5cdFx0XHQgKiAoZm9ybWF0KVxuXHRcdFx0ICpcblx0XHRcdCAqIDMuIFRoZSB0YXNrcyBuZWVkcyBhIHdheSB0byBiZSB0b2xkIHdoYXQgZm9ybWF0IHRvIHVzZS5cblx0XHRcdCAqIEEgdmFyaWFibGUgaXMgY3JlYXRlZCB0byBjb250YWluIHRoYXQgZm9ybWF0IGluc3RydWN0aW9uLlxuXHRcdFx0ICpcblx0XHRcdCAqIEhvd2V2ZXIsIGhvdyBjYW4gbWUgbW9kaWZ5IHRoYXQgZm9ybWF0IGZyb20gdGhlIG91dGVyIHNjb3BlP1xuXHRcdFx0ICogV2UgbmVlZCBhIHdheSB0byBiZSBhYmxlIHRvIGdldCB0aGF0IGluc3RydWN0aW9uIGZyb20gdGhlIGVuZC11c2VyXG5cdFx0XHQgKiBpbnRvIHRoaXMgZnVuY3Rpb24uXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBpcyBhbiBhdHRyaWJ1dGUgZGlyZWN0aXZlIGJlY2F1c2UgaXQgaXMgYSBkZWNvcmF0b3IuIEl0IGlzIGFkZGluZ1xuXHRcdFx0ICogZnVuY3Rpb24gdG8gYSB0ZXh0IGNvbnRhaW5lciBpbiB0aGUgRE9NLiBIZW5jZSwgaXQgaXMgYW4gYXR0cmlidXRlLlxuXHRcdFx0ICogQW4gYXR0cmlidXRlIHRha2VzIGEgdmFsdWUuIFdoYXQgd2UgY2FuIGRvIGlzIHRvIG1hcCBhIG1vZGVsIHByb3BlcnR5XG5cdFx0XHQgKiBvZiB0aGUgb3V0ZXIgc2NvcGUgdG8gdGhlIHZhbHVlIG9mIHRoaXMgYXR0cmlidXRlIGRpcmVjdGl2ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBXZSBjYW4gbWFwIGl0LCBidXQgaXQgd2lsbCBiZSB0aGVuIHN0YXRpYy4gV2hhdGV2ZXIgdGhlIGZvcm1hdCBtb2RlbCBpcyxcblx0XHRcdCAqIGl0IHdpbGwgYmUgdGhlIG9ubHkgZm9ybWF0IHRoaXMgYXR0cmlidXRlIGRpcmVjdGl2ZSB3aWxsIGV2ZXIgaGF2ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBXZSBjYW4gY2hhbmdlIHRoYXQgYnkgc2V0dGluZyBhIHdhdGNoZXIuXG5cdFx0XHQgKlxuXHRcdFx0ICogNC4gV2F0Y2ggdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgZGlyZWN0aXZlIHVzaW5nIHRoZSBlbGVtZW50XG5cdFx0XHQgKiBhcyB0aGUgcmVmZXJlbmNlIHBvaW50LiBTaW5jZSB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBkaXJlY3RpdmVcblx0XHRcdCAqIGlzIGNvbm5lY3RlZCB0byB0aGUgb3V0ZXIgc2NvcGUgbW9kZWwsIHdoZW4gdGhhdCBtb2RlbCBjaGFuZ2VzLCBpdCB3aWxsXG5cdFx0XHQgKiBjaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgZGlyZWN0aXZlIGFuZCB0cmlnZ2VyIHRoZSB3YXRjaC5cblx0XHRcdCAqIFRoZSB3YXRjaCB3aWxsIHRoZW4gdXBkYXRlIHRoZSBmb3JtYXQgd2l0aCB0aGUgbmV3IHZhbHVlIGFuZCBjYWxsXG5cdFx0XHQgKiB1cGRhdGUoKSBzbyB0aGF0IHRoZSB0YXNrIGNhbiBiZSByZWZyZXNoIGl0IGZvcm1hdCB2YWx1ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBXaXRoIHRoZXNlIHN0ZXBzIGluIGVmZmVjdCwgd2UgY2FuIGdldCBhIHRpbWVyIHRoYXQgdXBkYXRlcyBpdHNlbGZcblx0XHRcdCAqIGV2ZXIgc2Vjb25kLlxuXHRcdFx0ICovXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0bGV0IGZvcm1hdDtcblx0XHRcdGxldCB0aW1lb3V0SWQ7XG5cdFx0XHRcblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZVRpbWUoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRlbGVtZW50LnRleHQoZGF0ZUZpbHRlcihuZXcgRGF0ZSgpLCBmb3JtYXQpKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5kaEN1cnJlbnRUaW1lLCBmdW5jdGlvbiAodmFsdWUpIHtcblxuXHRcdFx0XHRmb3JtYXQgPSB2YWx1ZTtcblx0XHRcdFx0dXBkYXRlVGltZSgpO1xuXG5cdFx0XHR9KTtcblxuXHRcdFx0ZWxlbWVudC5vbihcIiRkZXN0cm95XCIsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHQkaW50ZXJ2YWwuY2FuY2VsKHRpbWVvdXRJZCk7XG5cblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHQvLyBTdGFydCB0aGUgVUkgdXBkYXRlIHByb2Nlc3M7IHNhdmUgdGhlIHRpbWVvdXRJZCBmb3IgY2FuY2VsaW5nXG5cdFx0XHR0aW1lb3V0SWQgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcblx0XHRcdFx0dXBkYXRlVGltZSgpO1xuXHRcdFx0XHRcblx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHRcdGxpbmtcblx0XHRcdFxuXHRcdH1cblx0XHRcblx0fV0pOyJdfQ==
