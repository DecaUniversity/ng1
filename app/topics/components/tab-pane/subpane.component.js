"use strict";

angular.module("main")
	.component("dhSubPane", {
		transclude: true,
		bindings: {title: "@"},
		templateUrl: "topics/components/tab-pane/pane.html",
		controller: PaneController,
		require: {tabsCtrl: "^dhSubTabs"}
	});
