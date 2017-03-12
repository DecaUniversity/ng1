"use strict";

angular.module("main").controller("ServiceSampleController",
	["$scope", "notify", function ($scope, notify) {
	
		$scope.message = "enter message here";
		
		$scope.callNotify = function (msg) {
			
			notify(msg);
			
		};
		
	}]);

angular.module("main")
	.factory("notify", ["$window", function (win) {
		
		let messages = [];
		const messageLimit = 3;
		
		return function (msg) {
			
			messages.push(msg);
			
			if (messages.length === messageLimit) {
				
				win.alert(messages.join("\n"));
				messages = [];
				
			}
			
		};
		
	}]);


