"use strict";

const MyPaneController = function () {
	
	const ctrl = this;
	
	ctrl.$onInit = function () {
		
		ctrl.tabsCtrl.addPane(this);
		
	};
	
};

angular.module("main")
	.component("dhPane", {
		transclude: true,
		bindings: {title: "@"},
		templateUrl: "components/tab-pane/pane.html",
		controller: MyPaneController,
		require: {tabsCtrl: "^dhTabs"}
	});
