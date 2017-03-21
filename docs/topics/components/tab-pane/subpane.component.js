"use strict";

/* global PaneController */

angular.module("main").component("dhSubPane", {
	transclude: true,
	bindings: { title: "@" },
	templateUrl: "topics/components/tab-pane/pane.html",
	controller: PaneController,
	require: { tabsCtrl: "^dhSubTabs" }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy9jb21wb25lbnRzL3RhYi1wYW5lL3N1YnBhbmUuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb21wb25lbnQiLCJ0cmFuc2NsdWRlIiwiYmluZGluZ3MiLCJ0aXRsZSIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIlBhbmVDb250cm9sbGVyIiwicmVxdWlyZSIsInRhYnNDdHJsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQUEsUUFBUUMsTUFBUixDQUFlLE1BQWYsRUFDRUMsU0FERixDQUNZLFdBRFosRUFDeUI7QUFDdkJDLGFBQVksSUFEVztBQUV2QkMsV0FBVSxFQUFDQyxPQUFPLEdBQVIsRUFGYTtBQUd2QkMsY0FBYSxzQ0FIVTtBQUl2QkMsYUFBWUMsY0FKVztBQUt2QkMsVUFBUyxFQUFDQyxVQUFVLFlBQVg7QUFMYyxDQUR6QiIsImZpbGUiOiJ0b3BpY3MvY29tcG9uZW50cy90YWItcGFuZS9zdWJwYW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgUGFuZUNvbnRyb2xsZXIgKi9cblxuYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpXG5cdC5jb21wb25lbnQoXCJkaFN1YlBhbmVcIiwge1xuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0YmluZGluZ3M6IHt0aXRsZTogXCJAXCJ9LFxuXHRcdHRlbXBsYXRlVXJsOiBcInRvcGljcy9jb21wb25lbnRzL3RhYi1wYW5lL3BhbmUuaHRtbFwiLFxuXHRcdGNvbnRyb2xsZXI6IFBhbmVDb250cm9sbGVyLFxuXHRcdHJlcXVpcmU6IHt0YWJzQ3RybDogXCJeZGhTdWJUYWJzXCJ9XG5cdH0pO1xuIl19
