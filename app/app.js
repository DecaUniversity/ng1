"use strict";

angular.module("app", ["ngAnimate"])
	// Services can also be registered via the $provide services inside of a module'
	// config function.
	.config(["$provide", function ($provide) {
		
		$provide.factory("Dec2Bin", function () {
			
			// Factory function body that constructs the new service instance.
			// This service converts a decimal number to binary
			
			// Verify that number is an integer number
			// From: http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
			// answered Feb 10 '13 at 2:28 by krisk
			let isInt = function (value) {
				return !isNaN(value) &&
						// This takes care of filtering out floating numbers
						parseInt(Number(value)) == value &&
						// ensure that the number is decimal
						!isNaN(parseInt(value, 10));
			};
			
			
			
			let convertDecToBin = function (decNum) {
				
				if (!isInt(decNum)) {
					return;
				}
				
				if (decNum < 0) {
					return;
				}
				
				let reduced = decNum;
				let binDigits = [];
				let binString = "";
				
				while (reduced != 0) {
					
					binDigits.push(reduced % 2);
					reduced = Math.floor(reduced/2);
					
				}
				
				for (let i = binDigits.length - 1; i > -1; i--) {
					
					binString += binDigits[i];
					
				}
				
				return binString;
				
			};
			
			return {
				dec2bin: convertDecToBin
			}
			
		});
		
	}]);
