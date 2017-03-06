"use strict";

const EditableFieldController = function ($scope, $element, $attrs) {
	
	const ctrl = this;
	
	ctrl.editMode = false;
	
	ctrl.handleModeChange = function () {
		
		console.log(
			`EditableFieldController.handleModeChange.
			editMode(${ctrl.editMode})`
		);
		
		if (ctrl.editMode) {
			
			ctrl.onUpdate({value: ctrl.fieldValue});
			ctrl.fieldValueCopy = ctrl.fieldValue;
			
		}
		
		ctrl.editMode = !ctrl.editMode;
		
	};
	
	ctrl.reset = function () {
		
		ctrl.fieldValue = ctrl.fieldValueCopy;
		
	};
	
	ctrl.$onInit = function () {
		
		// Make a copy of the initial value to be able to reset it later
		ctrl.fieldValueCopy = ctrl.fieldValue;
		
		// Set a default fieldType
		if (!ctrl.fieldType) {
			
			/**
			 * For any changes to this variable to be shown,
			 * the browser must be refreshed.
			 */
			
			ctrl.fieldType = "text";
			
		}
		
	};
	
};

angular.module("app")
	.component("editableField", {
		templateUrl: "components/hero_tree/editableField.html",
		controller: EditableFieldController,
		bindings: {
			fieldLabel: "@?",
			fieldValue: "<",
			// ? assigns the property as optional.
			fieldType: "@?",
			onUpdate: "&"
		}
	});
