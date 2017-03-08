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
		
		/**
		 * If there are no panes, select the new pane so that there is
		 * always at least one active pane.
		 */
		
		if (panes.length === this.defaultTab) {
			
			ctrl.select(pane);
			
		}
		
		panes.push(pane);
		
	};
	
};

angular.module("main")
	.component("myTabs", {
		
		transclude: true,
		controller: MyTabsController,
		templateUrl: "components/tab-pane/my-tabs.html",
		bindings: {defaultTab: "<"}
		
	});

