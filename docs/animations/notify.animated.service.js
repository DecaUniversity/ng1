"use strict";

angular.module("main").factory("notifyAnimated", ["$window", "$timeout", function (win, $timeout) {

	var rite = {
		chants: [],
		image: "",
		complete: false
	};

	var previousChant = "";
	var maxChants = 3;

	var bloodyMaryImg = "/animations/bloody-mary.jpg";
	var thundercatsImg = "/animations/thundercats.gif";
	var bettlejuiceImg = "/animations/beetlejuice.gif";
	var shameImg = "/animations/shame.gif";

	var reset = function reset() {

		rite.chants.length = 0;

		rite.complete = false;
		rite.image = "";
		previousChant = "";
	};

	var processMsgHelper = function processMsgHelper(message, messageImg) {

		/**
   * There are no chants. There is no previous message
   *  Make current chant the previous message.
      */

		if (rite.chants.length === 0) {

			rite.chants.push(message);
			rite.image = messageImg;
			previousChant = rite.chants[0];
		} else if (rite.chants.length > 0) {

			/**
    * Verify if there is a sequence of three chants.
    * Three equal consecutive chants are required for the
    * image to appear.
        */

			if (previousChant === message) {

				rite.chants.push(message);
				rite.image = messageImg;
				previousChant = message;
			} else {

				/**
     * The previous chant is different than the current one.
     * The combo is broken.
     */

				reset();

				// Start again. Make current chant the previous message.

				rite.chants.push(message);
				rite.image = messageImg;
				previousChant = message;
			}
		}
	};

	var processMsg = function processMsg(msg) {

		if (rite.chants.length < maxChants) {

			switch (msg) {
				case "Bloody Mary":

					processMsgHelper(msg, bloodyMaryImg);

					break;

				case "Thunder":

					processMsgHelper(msg, thundercatsImg);

					if (rite.chants.length === maxChants) {

						rite.chants.push("ThunderCats! HOOOOOOOOOO!");
						rite.complete = true;
					}

					break;

				case "Bettlejuice":

					processMsgHelper(msg, bettlejuiceImg);

					break;

				case "Shame":

					processMsgHelper(msg, shameImg);

					break;

				default:
					break;
			}
		}

		if (rite.chants.length === maxChants) {

			rite.complete = true;
		}
	};

	return {
		rite: rite,
		processMessage: processMsg,
		reset: reset
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMvbm90aWZ5LmFuaW1hdGVkLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImZhY3RvcnkiLCJ3aW4iLCIkdGltZW91dCIsInJpdGUiLCJjaGFudHMiLCJpbWFnZSIsImNvbXBsZXRlIiwicHJldmlvdXNDaGFudCIsIm1heENoYW50cyIsImJsb29keU1hcnlJbWciLCJ0aHVuZGVyY2F0c0ltZyIsImJldHRsZWp1aWNlSW1nIiwic2hhbWVJbWciLCJyZXNldCIsImxlbmd0aCIsInByb2Nlc3NNc2dIZWxwZXIiLCJtZXNzYWdlIiwibWVzc2FnZUltZyIsInB1c2giLCJwcm9jZXNzTXNnIiwibXNnIiwicHJvY2Vzc01lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRQyxNQUFSLENBQWUsTUFBZixFQUF1QkMsT0FBdkIsQ0FBK0IsZ0JBQS9CLEVBQ0MsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixVQUFVQyxHQUFWLEVBQWVDLFFBQWYsRUFBeUI7O0FBRWhELEtBQU1DLE9BQU87QUFDWkMsVUFBUSxFQURJO0FBRVpDLFNBQU8sRUFGSztBQUdaQyxZQUFVO0FBSEUsRUFBYjs7QUFNQSxLQUFJQyxnQkFBZ0IsRUFBcEI7QUFDQSxLQUFNQyxZQUFZLENBQWxCOztBQUVBLEtBQU1DLGdCQUFnQiw2QkFBdEI7QUFDQSxLQUFNQyxpQkFBaUIsNkJBQXZCO0FBQ0EsS0FBTUMsaUJBQWlCLDZCQUF2QjtBQUNBLEtBQU1DLFdBQVcsdUJBQWpCOztBQUVBLEtBQU1DLFFBQVEsU0FBUkEsS0FBUSxHQUFZOztBQUV6QlYsT0FBS0MsTUFBTCxDQUFZVSxNQUFaLEdBQXFCLENBQXJCOztBQUVBWCxPQUFLRyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0FILE9BQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0FFLGtCQUFnQixFQUFoQjtBQUVBLEVBUkQ7O0FBVUEsS0FBTVEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0I7O0FBRXZEOzs7OztBQUtBLE1BQUlkLEtBQUtDLE1BQUwsQ0FBWVUsTUFBWixLQUF1QixDQUEzQixFQUE4Qjs7QUFFN0JYLFFBQUtDLE1BQUwsQ0FBWWMsSUFBWixDQUFpQkYsT0FBakI7QUFDQWIsUUFBS0UsS0FBTCxHQUFhWSxVQUFiO0FBQ0FWLG1CQUFnQkosS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBaEI7QUFFQSxHQU5ELE1BTU8sSUFBSUQsS0FBS0MsTUFBTCxDQUFZVSxNQUFaLEdBQXFCLENBQXpCLEVBQTRCOztBQUVsQzs7Ozs7O0FBTUEsT0FBSVAsa0JBQWtCUyxPQUF0QixFQUErQjs7QUFFOUJiLFNBQUtDLE1BQUwsQ0FBWWMsSUFBWixDQUFpQkYsT0FBakI7QUFDQWIsU0FBS0UsS0FBTCxHQUFhWSxVQUFiO0FBQ0FWLG9CQUFnQlMsT0FBaEI7QUFFQSxJQU5ELE1BTU87O0FBRU47Ozs7O0FBS0FIOztBQUVBOztBQUVBVixTQUFLQyxNQUFMLENBQVljLElBQVosQ0FBaUJGLE9BQWpCO0FBQ0FiLFNBQUtFLEtBQUwsR0FBYVksVUFBYjtBQUNBVixvQkFBZ0JTLE9BQWhCO0FBRUE7QUFFRDtBQUdELEVBL0NEOztBQWlEQSxLQUFNRyxhQUFhLFNBQWJBLFVBQWEsQ0FBVUMsR0FBVixFQUFlOztBQUVqQyxNQUFJakIsS0FBS0MsTUFBTCxDQUFZVSxNQUFaLEdBQXFCTixTQUF6QixFQUFvQzs7QUFFbkMsV0FBUVksR0FBUjtBQUNDLFNBQUssYUFBTDs7QUFFQ0wsc0JBQWlCSyxHQUFqQixFQUFzQlgsYUFBdEI7O0FBRUE7O0FBRUQsU0FBSyxTQUFMOztBQUVDTSxzQkFBaUJLLEdBQWpCLEVBQXNCVixjQUF0Qjs7QUFFQSxTQUFJUCxLQUFLQyxNQUFMLENBQVlVLE1BQVosS0FBdUJOLFNBQTNCLEVBQXNDOztBQUVyQ0wsV0FBS0MsTUFBTCxDQUFZYyxJQUFaLENBQWlCLDJCQUFqQjtBQUNBZixXQUFLRyxRQUFMLEdBQWdCLElBQWhCO0FBRUE7O0FBRUQ7O0FBRUQsU0FBSyxhQUFMOztBQUVDUyxzQkFBaUJLLEdBQWpCLEVBQXNCVCxjQUF0Qjs7QUFFQTs7QUFFRCxTQUFLLE9BQUw7O0FBRUNJLHNCQUFpQkssR0FBakIsRUFBc0JSLFFBQXRCOztBQUVBOztBQUVEO0FBQ0M7QUFqQ0Y7QUFvQ0E7O0FBRUQsTUFBSVQsS0FBS0MsTUFBTCxDQUFZVSxNQUFaLEtBQXVCTixTQUEzQixFQUFzQzs7QUFFckNMLFFBQUtHLFFBQUwsR0FBZ0IsSUFBaEI7QUFFQTtBQUVELEVBaEREOztBQWtEQSxRQUFPO0FBQ05ILFlBRE07QUFFTmtCLGtCQUFnQkYsVUFGVjtBQUdOTjtBQUhNLEVBQVA7QUFNQSxDQW5JRCxDQUREIiwiZmlsZSI6ImFuaW1hdGlvbnMvbm90aWZ5LmFuaW1hdGVkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpLmZhY3RvcnkoXCJub3RpZnlBbmltYXRlZFwiLFxuXHRbXCIkd2luZG93XCIsIFwiJHRpbWVvdXRcIiwgZnVuY3Rpb24gKHdpbiwgJHRpbWVvdXQpIHtcblx0XHRcblx0XHRjb25zdCByaXRlID0ge1xuXHRcdFx0Y2hhbnRzOiBbXSxcblx0XHRcdGltYWdlOiBcIlwiLFxuXHRcdFx0Y29tcGxldGU6IGZhbHNlXG5cdFx0fTtcblx0XHRcblx0XHRsZXQgcHJldmlvdXNDaGFudCA9IFwiXCI7XG5cdFx0Y29uc3QgbWF4Q2hhbnRzID0gMztcblx0XHRcblx0XHRjb25zdCBibG9vZHlNYXJ5SW1nID0gXCIvYW5pbWF0aW9ucy9ibG9vZHktbWFyeS5qcGdcIjtcblx0XHRjb25zdCB0aHVuZGVyY2F0c0ltZyA9IFwiL2FuaW1hdGlvbnMvdGh1bmRlcmNhdHMuZ2lmXCI7XG5cdFx0Y29uc3QgYmV0dGxlanVpY2VJbWcgPSBcIi9hbmltYXRpb25zL2JlZXRsZWp1aWNlLmdpZlwiO1xuXHRcdGNvbnN0IHNoYW1lSW1nID0gXCIvYW5pbWF0aW9ucy9zaGFtZS5naWZcIjtcblx0XHRcblx0XHRjb25zdCByZXNldCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFxuXHRcdFx0cml0ZS5jaGFudHMubGVuZ3RoID0gMDtcblx0XHRcdFxuXHRcdFx0cml0ZS5jb21wbGV0ZSA9IGZhbHNlO1xuXHRcdFx0cml0ZS5pbWFnZSA9IFwiXCI7XG5cdFx0XHRwcmV2aW91c0NoYW50ID0gXCJcIjtcblx0XHRcdFxuXHRcdH07XG5cdFx0XG5cdFx0Y29uc3QgcHJvY2Vzc01zZ0hlbHBlciA9IGZ1bmN0aW9uIChtZXNzYWdlLCBtZXNzYWdlSW1nKSB7XG5cdFx0XHRcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlcmUgYXJlIG5vIGNoYW50cy4gVGhlcmUgaXMgbm8gcHJldmlvdXMgbWVzc2FnZVxuXHRcdFx0ICogIE1ha2UgY3VycmVudCBjaGFudCB0aGUgcHJldmlvdXMgbWVzc2FnZS5cbiAgICAgICAqL1xuXHRcdFx0XG5cdFx0XHRpZiAocml0ZS5jaGFudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRyaXRlLmNoYW50cy5wdXNoKG1lc3NhZ2UpO1xuXHRcdFx0XHRyaXRlLmltYWdlID0gbWVzc2FnZUltZztcblx0XHRcdFx0cHJldmlvdXNDaGFudCA9IHJpdGUuY2hhbnRzWzBdO1xuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAocml0ZS5jaGFudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIFZlcmlmeSBpZiB0aGVyZSBpcyBhIHNlcXVlbmNlIG9mIHRocmVlIGNoYW50cy5cblx0XHRcdFx0ICogVGhyZWUgZXF1YWwgY29uc2VjdXRpdmUgY2hhbnRzIGFyZSByZXF1aXJlZCBmb3IgdGhlXG5cdFx0XHRcdCAqIGltYWdlIHRvIGFwcGVhci5cbiAgICAgICAgICovXG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAocHJldmlvdXNDaGFudCA9PT0gbWVzc2FnZSkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJpdGUuY2hhbnRzLnB1c2gobWVzc2FnZSk7XG5cdFx0XHRcdFx0cml0ZS5pbWFnZSA9IG1lc3NhZ2VJbWc7XG5cdFx0XHRcdFx0cHJldmlvdXNDaGFudCA9IG1lc3NhZ2U7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogVGhlIHByZXZpb3VzIGNoYW50IGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjdXJyZW50IG9uZS5cblx0XHRcdFx0XHQgKiBUaGUgY29tYm8gaXMgYnJva2VuLlxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJlc2V0KCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gU3RhcnQgYWdhaW4uIE1ha2UgY3VycmVudCBjaGFudCB0aGUgcHJldmlvdXMgbWVzc2FnZS5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyaXRlLmNoYW50cy5wdXNoKG1lc3NhZ2UpO1xuXHRcdFx0XHRcdHJpdGUuaW1hZ2UgPSBtZXNzYWdlSW1nO1xuXHRcdFx0XHRcdHByZXZpb3VzQ2hhbnQgPSBtZXNzYWdlO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHRcdGNvbnN0IHByb2Nlc3NNc2cgPSBmdW5jdGlvbiAobXNnKSB7XG5cdFx0XHRcblx0XHRcdGlmIChyaXRlLmNoYW50cy5sZW5ndGggPCBtYXhDaGFudHMpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHN3aXRjaCAobXNnKSB7XG5cdFx0XHRcdFx0Y2FzZSBcIkJsb29keSBNYXJ5XCI6XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHByb2Nlc3NNc2dIZWxwZXIobXNnLCBibG9vZHlNYXJ5SW1nKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlIFwiVGh1bmRlclwiOlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRwcm9jZXNzTXNnSGVscGVyKG1zZywgdGh1bmRlcmNhdHNJbWcpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocml0ZS5jaGFudHMubGVuZ3RoID09PSBtYXhDaGFudHMpIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdHJpdGUuY2hhbnRzLnB1c2goXCJUaHVuZGVyQ2F0cyEgSE9PT09PT09PT08hXCIpO1xuXHRcdFx0XHRcdFx0XHRyaXRlLmNvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNhc2UgXCJCZXR0bGVqdWljZVwiOlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRwcm9jZXNzTXNnSGVscGVyKG1zZywgYmV0dGxlanVpY2VJbWcpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlIFwiU2hhbWVcIjpcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cHJvY2Vzc01zZ0hlbHBlcihtc2csIHNoYW1lSW1nKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmIChyaXRlLmNoYW50cy5sZW5ndGggPT09IG1heENoYW50cykge1xuXHRcdFx0XHRcblx0XHRcdFx0cml0ZS5jb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fTtcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0cml0ZSxcblx0XHRcdHByb2Nlc3NNZXNzYWdlOiBwcm9jZXNzTXNnLFxuXHRcdFx0cmVzZXRcblx0XHR9O1xuXHRcblx0fV0pO1xuIl19
