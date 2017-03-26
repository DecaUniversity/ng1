"use strict";

angular.module("scopeExample", [])
	.config(["$sceDelegateProvider", function ($sceDelegateProvider) {
		
		/**
		 * AngularJS' Strict Contextual Escaping (SCE) mode, enabled by default,
		 * blocks loading a resource from an insecure URL.
		 * By default, only URLs that belong to the same origin are trusted.
		 * These are URLs with the same domain, protocol and port as the
		 * application document.
		 * To use a source from other domains and/or protocols, either adjust
		 * the whitelist/blacklist or wrap the URL with a call to
		 * $sce.trustAsResourceURL
		 */
		
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			"https://www.youtube.com/embed/**"
		]);
		
	}]);
