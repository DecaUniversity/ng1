"use strict";

angular.module("main")
	.component("dhTabs", {
		
		transclude: true,
		controller: TabsController,
		templateUrl: "topics/components/tab-pane/tabs.html",
		bindings: {defaultTab: "<"}
		
	});

