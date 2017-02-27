"use strict";

angular.module("app")
	.factory("notifyAnimated",
		["$window", "$timeout", function (win, $timeout) {
			
			let rite = {
				chants: [],
				image: "",
				complete: false
			};
			
			let previousChant = "";
			const maxChants = 3;
			
			const bloodyMaryImg = "/animations/bloody-mary.jpg";
			const thundercatsImg = "/animations/thundercats.gif";
			const bettlejuiceImg = "/animations/beetlejuice.gif";
			
			const processMsgHelper = function (message, messageImg) {
				
				// There are no chants. There is no previous message
				// Make current chant the previous message.
				if (rite.chants.length === 0) {
					
					rite.chants.push(message);
					rite.image = messageImg;
					previousChant = rite.chants[0];
					
				} else {
					
					// Verify if there is a sequence of three chants.
					// Three equal consecutive chants are required for the
					// image to appear.
					if (previousChant === message) {
						
						rite.chants.push(message);
						rite.image = messageImg;
						previousChant = message;
						
					} else {
						
						// The previous chant is different than the current one.
						// The combo is broken.
						
						reset();
						
						// Start again.
						// Make current chant the previous message.
						
						rite.chants.push(message);
						rite.image = messageImg;
						previousChant = message;
						
					}
					
				}
				
				
			};
			
			const processMsg = function (msg) {
				
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
							
						default:
							break;
					}
					
				}
				
				if (rite.chants.length === maxChants) {
					
					rite.complete = true;
					
				}
				
			};
			
			const reset = function () {
				
				rite.chants.length = 0;
				
				rite.complete = false;
				rite.image = "";
				previousChant = "";
				
			};
			
			return {
				rite,
				processMessage: processMsg,
				reset
			};
		
		}]);
