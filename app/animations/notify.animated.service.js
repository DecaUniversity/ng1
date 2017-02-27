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
				
				console.log(`Processing... ${message}`);
				
				// There are no chants. There is no previous message
				// Make current chant the previous message.
				if (rite.chants.length === 0) {
					
					console.log(`There is no existing chant combo.`);
					
					rite.chants.push(message);
					rite.image = messageImg;
					previousChant = rite.chants[0];
					
					console.log(`Service rite: ${JSON.stringify(rite)}`);
					
				} else {
					
					// Verify if there is a sequence of three chants.
					// Three equal consecutive chants are required for the
					// image to appear.
					if (previousChant === message) {
						
						console.log(`Combo! `);
						
						rite.chants.push(message);
						rite.image = messageImg;
						previousChant = message;
						
						console.log(`Service rite: ${JSON.stringify(rite)}`);
						
						
					} else {
						
						// The previous chant is different than the current one.
						// The combo is broken.
						
						console.log(`COMBO BREAKER!!!!`);
						
						reset();
						
						// Start again.
						// Make current chant the previous message.
						
						rite.chants.push(message);
						rite.image = messageImg;
						previousChant = message;
						
						console.log(`Service rite: ${JSON.stringify(rite)}`);
						
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
					
					console.log(`Max Chants reached! INVOKE!!!!`);
					
					rite.complete = true;
					console.log(`Service rite: ${JSON.stringify(rite)}`);
					
				} else if (rite.chants.length > maxChants) {
					console.log("Max chants reached.");
				}
				
				// console.log(`(OUT) Chant count : ${rite.chants.length}`);
				
			};
			
			const reset = function () {
				
				console.log(`Resetting set.`);
				
				// for (let i = rite.chants.length; i > 0; i--) {
				// 	rite.chants.pop();
				// }
				
				rite.chants.length = 0;
				
				rite.complete = false;
				rite.image = "";
				previousChant = "";
				
				console.log(`Service rite: ${JSON.stringify(rite)}`);
				
			};
			
			return {
				rite,
				processMessage: processMsg,
				reset
			};
		
		}]);
