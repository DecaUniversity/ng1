"use strict";

const PaneController = function () {
	
	const ctrl = this;
	
	ctrl.$onInit = function () {
		
		ctrl.tabsCtrl.addPane(this);
		
	};
	
};

angular.module("main")
	.controller("PaneController", PaneController);
