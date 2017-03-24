"use strict";

/* global TabsController */

angular.module("main")
	.component("dhSubTabs", {
		
		transclude: true,
		controller: TabsController,
		templateUrl: "topics/components/tab-pane/subtabs.html",
		bindings: {defaultTab: "<"}
		
	});
