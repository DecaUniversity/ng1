"use strict";

const MyPaneController = function () {
	
	const ctrl = this;
	
	ctrl.$onInit = function () {
		
		ctrl.tabsCtrl.addPane(this);
		console.log(`Adding ${this.title} ${this.selected} to Tabs`);
		
	}
	
};

angular.module("app")
	.component("myPane", {
		transclude: true,
		bindings: {title: "@"},
		templateUrl: "/components/tab-pane/my-pane.html",
		controller: MyPaneController,
		require: {
			tabsCtrl: "^myTabs"
		}
	});