"use strict";

angular.module("main").factory("notifyAnimated",
	["$window", "$timeout", function (win, $timeout) {
		
		const rite = {
			chants: [],
			image: "",
			complete: false
		};
		
		let previousChant = "";
		const maxChants = 3;
		
		const bloodyMaryImg = "topics/animations/assets/bloody-mary.jpg";
		const thundercatsImg = "topics/animations/assets/thundercats.gif";
		const bettlejuiceImg = "topics/animations/assets/beetlejuice.gif";
		const shameImg = "topics/animations/assets/shame.gif";
		
		const reset = function () {
			
			rite.chants.length = 0;
			
			rite.complete = false;
			rite.image = "";
			previousChant = "";
			
		};
		
		const processMsgHelper = function (message, messageImg) {
			
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
			rite,
			processMessage: processMsg,
			reset
		};
	
	}]);
