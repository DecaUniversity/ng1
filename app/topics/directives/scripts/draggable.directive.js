"use strict";

angular.module("directives")
	.directive("dhDraggable", ["$document", function ($document) {
		
		return {
			
			link (scope, element, attr) {
				
				let startX = 0;
				let startY = 0;
				let posX = 0;
				let posY = 0;
				
				element.css({
					
					position: "relative",
					cursor: "pointer"
					
				});
				
				const mousemove = function (event) {
					
					posY = event.pageY - startY;
					posX = event.pageX - startX;
					
					element.css({
						
						top: `${posY}px`,
						left: `${posX}px`
					});
					
				};
				
				const mouseup = function () {
					
					$document.off("mousemove", mousemove);
					$document.off("mouseup", mouseup);
					
				};
				
				element.on("mousedown", function (event) {
					
					event.preventDefault();
					
					startX = event.pageX - posX;
					startY = event.pageY - posY;
					
					$document.on("mousemove", mousemove);
					$document.on("mouseup", mouseup);
					
				});
				
			}
			
		};
		
	}]);
