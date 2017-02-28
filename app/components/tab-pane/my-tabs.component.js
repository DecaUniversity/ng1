"use strict";

const MyTabsController = function () {
	
	const ctrl = this;
	
	const panes = [];
	
	ctrl.panes = panes;
	
	/**
	 * Select a pane
	 * @param pane The pane to be selected
	 */
	ctrl.select = function (pane) {
		
		// Unselect all panes
		angular.forEach(panes, function (paneItem) {
			
			paneItem.selected = false;
			
		});
		
		console.log(`Making ${pane.title} selected!`);
		
		// Select the passed pane
		pane.selected = true;
		
	};
	
	/**
	 * Add pane to the array of panes
	 * @param pane The pane to be added
	 */
	ctrl.addPane = function (pane) {
		
		// Select latest pane for faster testing
		
		const preLast = 1;
		
		/**
		 * If there are no panes, select the new pane so that there is
		 * always at least one active pane.
		 */
		
		if (panes.length === 0) {
			
			/**
			 * Uncomment to restore first pane being selected by default
			 * Keep using while on testing
			 * ctrl.select(pane);
			 */
			
			
			console.log(pane);
			
		} else if (panes.length === preLast) {
			
			ctrl.select(pane);
			
		}
		
		panes.push(pane);
		
	};
	
};

angular.module("app")
	.component("myTabs", {
		
		transclude: true,
		controller: MyTabsController,
		templateUrl: "/components/tab-pane/my-tabs.html"
		
	});

