"use strict";

const MyTabsController = function () {
	
	const ctrl = this;
	
	const panes = ctrl.panes = [];
	
	/**
	 * Select a pane
	 * @param pane The pane to be selected
	 */
	ctrl.select = function (pane) {
		
		// Unselect all panes
		// TODO: Improve performance of this function
		angular.forEach(panes, function (paneItem) {
			
			paneItem.selected = false;
			
		});
		
		// Select the passed pane
		pane.selected = true;
		
	};
	
	/**
	 * Add pane to the array of panes
	 * @param pane The pane to be added
	 */
	ctrl.addPane = function (pane) {
		
		// If there are no panes, select the new pane so that there is
		// always at least one active pane.
		if (panes.length === 0) {
			
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

