"use strict";

const PaneController = function () {
	
	const ctrl = this;
	
	ctrl.$onInit = function () {
		
		ctrl.tabsCtrl.addPane(this);
		
	};
	
};

angular.module("main")
	.component("dhPane", {
		transclude: true,
		bindings: {title: "@"},
		templateUrl: "topics/components/tab-pane/pane.html",
		controller: PaneController,
		require: {tabsCtrl: "^dhTabs"}
	});
