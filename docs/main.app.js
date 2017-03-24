/* eslint eqeqeq: 0 */

"use strict";

angular.module("main", ["ngAnimate", "scopeExample", "family", "directives"])

/**
 * Services can also be registered via the $provide services
 * inside of a module config function.
 **/
.config(["$provide", function ($provide) {

	$provide.factory("Dec2Bin", function () {

		/**
   * Verify that number is an integer number
   * from: http://stackoverflow.com/a/14794066/6051978
   **/
		var isInt = function isInt(value) {

			return !isNaN(value) &&
			// This takes care of filtering out floating numbers
			parseInt(Number(value), 10) == value &&
			// Ensure that the number is decimal
			!isNaN(parseInt(value, 10));
		};

		var convertDecToBin = function convertDecToBin(decNum) {

			if (!isInt(decNum)) {

				return;
			}

			if (decNum < 0) {

				return;
			}

			var reduced = decNum;
			var binDigits = [];
			var binString = "";

			while (reduced !== 0) {

				binDigits.push(reduced % 2);
				reduced = Math.floor(reduced / 2);
			}

			for (var elem = binDigits.length - 1; elem > -1; elem--) {

				binString += binDigits[elem];
			}

			return binString;
		};

		return { dec2bin: convertDecToBin };
	});
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uYXBwLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkcHJvdmlkZSIsImZhY3RvcnkiLCJpc0ludCIsInZhbHVlIiwiaXNOYU4iLCJwYXJzZUludCIsIk51bWJlciIsImNvbnZlcnREZWNUb0JpbiIsImRlY051bSIsInJlZHVjZWQiLCJiaW5EaWdpdHMiLCJiaW5TdHJpbmciLCJwdXNoIiwiTWF0aCIsImZsb29yIiwiZWxlbSIsImxlbmd0aCIsImRlYzJiaW4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBQSxRQUFRQyxNQUFSLENBQWUsTUFBZixFQUF1QixDQUFDLFdBQUQsRUFBYyxjQUFkLEVBQThCLFFBQTlCLEVBQXdDLFlBQXhDLENBQXZCOztBQUVDOzs7O0FBRkQsQ0FNRUMsTUFORixDQU1TLENBQUMsVUFBRCxFQUFhLFVBQVVDLFFBQVYsRUFBb0I7O0FBRXhDQSxVQUFTQyxPQUFULENBQWlCLFNBQWpCLEVBQTRCLFlBQVk7O0FBRXZDOzs7O0FBSUEsTUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQVVDLEtBQVYsRUFBaUI7O0FBRTlCLFVBQU8sQ0FBQ0MsTUFBTUQsS0FBTixDQUFEO0FBQ047QUFDQUUsWUFBU0MsT0FBT0gsS0FBUCxDQUFULEVBQXdCLEVBQXhCLEtBQStCQSxLQUZ6QjtBQUdOO0FBQ0EsSUFBQ0MsTUFBTUMsU0FBU0YsS0FBVCxFQUFnQixFQUFoQixDQUFOLENBSkY7QUFNQSxHQVJEOztBQVVBLE1BQU1JLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBVUMsTUFBVixFQUFrQjs7QUFFekMsT0FBSSxDQUFDTixNQUFNTSxNQUFOLENBQUwsRUFBb0I7O0FBRW5CO0FBRUE7O0FBRUQsT0FBSUEsU0FBUyxDQUFiLEVBQWdCOztBQUVmO0FBRUE7O0FBRUQsT0FBSUMsVUFBVUQsTUFBZDtBQUNBLE9BQU1FLFlBQVksRUFBbEI7QUFDQSxPQUFJQyxZQUFZLEVBQWhCOztBQUVBLFVBQU9GLFlBQVksQ0FBbkIsRUFBc0I7O0FBRXJCQyxjQUFVRSxJQUFWLENBQWVILFVBQVUsQ0FBekI7QUFDQUEsY0FBVUksS0FBS0MsS0FBTCxDQUFXTCxVQUFVLENBQXJCLENBQVY7QUFFQTs7QUFFRCxRQUFLLElBQUlNLE9BQU9MLFVBQVVNLE1BQVYsR0FBbUIsQ0FBbkMsRUFBc0NELE9BQU8sQ0FBQyxDQUE5QyxFQUFpREEsTUFBakQsRUFBeUQ7O0FBRXhESixpQkFBYUQsVUFBVUssSUFBVixDQUFiO0FBRUE7O0FBRUQsVUFBT0osU0FBUDtBQUVBLEdBakNEOztBQW1DQSxTQUFPLEVBQUNNLFNBQVNWLGVBQVYsRUFBUDtBQUVBLEVBckREO0FBdURBLENBekRPLENBTlQiLCJmaWxlIjoibWFpbi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgZXFlcWVxOiAwICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1haW5cIiwgW1wibmdBbmltYXRlXCIsIFwic2NvcGVFeGFtcGxlXCIsIFwiZmFtaWx5XCIsIFwiZGlyZWN0aXZlc1wiXSlcblx0XG5cdC8qKlxuXHQgKiBTZXJ2aWNlcyBjYW4gYWxzbyBiZSByZWdpc3RlcmVkIHZpYSB0aGUgJHByb3ZpZGUgc2VydmljZXNcblx0ICogaW5zaWRlIG9mIGEgbW9kdWxlIGNvbmZpZyBmdW5jdGlvbi5cblx0ICoqL1xuXHQuY29uZmlnKFtcIiRwcm92aWRlXCIsIGZ1bmN0aW9uICgkcHJvdmlkZSkge1xuXHRcdFxuXHRcdCRwcm92aWRlLmZhY3RvcnkoXCJEZWMyQmluXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBWZXJpZnkgdGhhdCBudW1iZXIgaXMgYW4gaW50ZWdlciBudW1iZXJcblx0XHRcdCAqIGZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0Nzk0MDY2LzYwNTE5Nzhcblx0XHRcdCAqKi9cblx0XHRcdGNvbnN0IGlzSW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gIWlzTmFOKHZhbHVlKSAmJlxuXHRcdFx0XHRcdC8vIFRoaXMgdGFrZXMgY2FyZSBvZiBmaWx0ZXJpbmcgb3V0IGZsb2F0aW5nIG51bWJlcnNcblx0XHRcdFx0XHRwYXJzZUludChOdW1iZXIodmFsdWUpLCAxMCkgPT0gdmFsdWUgJiZcblx0XHRcdFx0XHQvLyBFbnN1cmUgdGhhdCB0aGUgbnVtYmVyIGlzIGRlY2ltYWxcblx0XHRcdFx0XHQhaXNOYU4ocGFyc2VJbnQodmFsdWUsIDEwKSk7XG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHRcdFxuXHRcdFx0Y29uc3QgY29udmVydERlY1RvQmluID0gZnVuY3Rpb24gKGRlY051bSkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCFpc0ludChkZWNOdW0pKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoZGVjTnVtIDwgMCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHJlZHVjZWQgPSBkZWNOdW07XG5cdFx0XHRcdGNvbnN0IGJpbkRpZ2l0cyA9IFtdO1xuXHRcdFx0XHRsZXQgYmluU3RyaW5nID0gXCJcIjtcblx0XHRcdFx0XG5cdFx0XHRcdHdoaWxlIChyZWR1Y2VkICE9PSAwKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YmluRGlnaXRzLnB1c2gocmVkdWNlZCAlIDIpO1xuXHRcdFx0XHRcdHJlZHVjZWQgPSBNYXRoLmZsb29yKHJlZHVjZWQgLyAyKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Zm9yIChsZXQgZWxlbSA9IGJpbkRpZ2l0cy5sZW5ndGggLSAxOyBlbGVtID4gLTE7IGVsZW0tLSkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGJpblN0cmluZyArPSBiaW5EaWdpdHNbZWxlbV07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBiaW5TdHJpbmc7XG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHtkZWMyYmluOiBjb252ZXJ0RGVjVG9CaW59O1xuXHRcdFx0XG5cdFx0fSk7XG5cdFx0XG5cdH1dKTtcbiJdfQ==
