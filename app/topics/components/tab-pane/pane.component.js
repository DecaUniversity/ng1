"use strict";

/* global PaneController */

angular.module("main")
	.component("dhPane", {
		transclude: true,
		bindings: {title: "@"},
		templateUrl: "topics/components/tab-pane/pane.html",
		controller: PaneController,
		require: {tabsCtrl: "^dhTabs"}
	});
