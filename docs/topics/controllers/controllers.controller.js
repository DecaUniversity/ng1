"use strict";

angular.module("main").controller("GreetingController", ["$scope", function ($scope) {

	$scope.greeting = "Hola!";
}]);

angular.module("main").controller("DoubleController", ["$scope", function ($scope) {

	$scope.num = null;

	$scope.double = function (value) {

		var xx = 2;

		return value * xx;
	};
}]);

angular.module("main").controller("SpicyController", ["$scope", function ($scope) {

	$scope.spice = "very";
	$scope.customSpice = "wasabi";

	$scope.chiliSpicy = function () {

		$scope.spice = "chili";
	};

	$scope.jalapenoSpicy = function () {

		$scope.spice = "jalapeño";
	};

	$scope.setCustomSpice = function (spice) {

		$scope.spice = spice;
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy9jb250cm9sbGVycy9jb250cm9sbGVycy5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiZ3JlZXRpbmciLCJudW0iLCJkb3VibGUiLCJ2YWx1ZSIsInh4Iiwic3BpY2UiLCJjdXN0b21TcGljZSIsImNoaWxpU3BpY3kiLCJqYWxhcGVub1NwaWN5Iiwic2V0Q3VzdG9tU3BpY2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUdBQSxRQUFRQyxNQUFSLENBQWUsTUFBZixFQUNFQyxVQURGLENBQ2Esb0JBRGIsRUFDbUMsQ0FBQyxRQUFELEVBQVcsVUFBVUMsTUFBVixFQUFrQjs7QUFFOURBLFFBQU9DLFFBQVAsR0FBa0IsT0FBbEI7QUFFQSxDQUppQyxDQURuQzs7QUFRQUosUUFBUUMsTUFBUixDQUFlLE1BQWYsRUFDRUMsVUFERixDQUNhLGtCQURiLEVBQ2lDLENBQUMsUUFBRCxFQUFXLFVBQVVDLE1BQVYsRUFBa0I7O0FBRTVEQSxRQUFPRSxHQUFQLEdBQWEsSUFBYjs7QUFFQUYsUUFBT0csTUFBUCxHQUFnQixVQUFDQyxLQUFELEVBQVc7O0FBRTFCLE1BQU1DLEtBQUssQ0FBWDs7QUFFQSxTQUFPRCxRQUFRQyxFQUFmO0FBRUEsRUFORDtBQVFBLENBWitCLENBRGpDOztBQWVBUixRQUFRQyxNQUFSLENBQWUsTUFBZixFQUNFQyxVQURGLENBQ2EsaUJBRGIsRUFDZ0MsQ0FBQyxRQUFELEVBQVcsVUFBVUMsTUFBVixFQUFrQjs7QUFFM0RBLFFBQU9NLEtBQVAsR0FBZSxNQUFmO0FBQ0FOLFFBQU9PLFdBQVAsR0FBcUIsUUFBckI7O0FBRUFQLFFBQU9RLFVBQVAsR0FBb0IsWUFBTTs7QUFFekJSLFNBQU9NLEtBQVAsR0FBZSxPQUFmO0FBRUEsRUFKRDs7QUFNQU4sUUFBT1MsYUFBUCxHQUF1QixZQUFNOztBQUU1QlQsU0FBT00sS0FBUCxHQUFlLFVBQWY7QUFFQSxFQUpEOztBQU1BTixRQUFPVSxjQUFQLEdBQXdCLFVBQUNKLEtBQUQsRUFBVzs7QUFFbENOLFNBQU9NLEtBQVAsR0FBZUEsS0FBZjtBQUVBLEVBSkQ7QUFNQSxDQXZCOEIsQ0FEaEMiLCJmaWxlIjoidG9waWNzL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuXG5hbmd1bGFyLm1vZHVsZShcIm1haW5cIilcblx0LmNvbnRyb2xsZXIoXCJHcmVldGluZ0NvbnRyb2xsZXJcIiwgW1wiJHNjb3BlXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcblxuXHRcdCRzY29wZS5ncmVldGluZyA9IFwiSG9sYSFcIjtcblxuXHR9XSk7XG5cblxuYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpXG5cdC5jb250cm9sbGVyKFwiRG91YmxlQ29udHJvbGxlclwiLCBbXCIkc2NvcGVcIiwgZnVuY3Rpb24gKCRzY29wZSkge1xuXG5cdFx0JHNjb3BlLm51bSA9IG51bGw7XG5cblx0XHQkc2NvcGUuZG91YmxlID0gKHZhbHVlKSA9PiB7XG5cblx0XHRcdGNvbnN0IHh4ID0gMjtcblxuXHRcdFx0cmV0dXJuIHZhbHVlICogeHg7XG5cblx0XHR9O1xuXG5cdH1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpXG5cdC5jb250cm9sbGVyKFwiU3BpY3lDb250cm9sbGVyXCIsIFtcIiRzY29wZVwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG5cblx0XHQkc2NvcGUuc3BpY2UgPSBcInZlcnlcIjtcblx0XHQkc2NvcGUuY3VzdG9tU3BpY2UgPSBcIndhc2FiaVwiO1xuXG5cdFx0JHNjb3BlLmNoaWxpU3BpY3kgPSAoKSA9PiB7XG5cblx0XHRcdCRzY29wZS5zcGljZSA9IFwiY2hpbGlcIjtcblxuXHRcdH07XG5cblx0XHQkc2NvcGUuamFsYXBlbm9TcGljeSA9ICgpID0+IHtcblxuXHRcdFx0JHNjb3BlLnNwaWNlID0gXCJqYWxhcGXDsW9cIjtcblxuXHRcdH07XG5cblx0XHQkc2NvcGUuc2V0Q3VzdG9tU3BpY2UgPSAoc3BpY2UpID0+IHtcblxuXHRcdFx0JHNjb3BlLnNwaWNlID0gc3BpY2U7XG5cblx0XHR9O1xuXG5cdH1dKTtcbiJdfQ==
