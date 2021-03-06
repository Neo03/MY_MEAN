'use strict';

var mainApplicationModuleName = 'my_mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, 
	['ngRoute', 'ngResource','users', 'example', 'articles', 'chat']);

mainApplicationModule.config(['$locationProvider', 
	function($locationProvider){
		$locationProvider.hashPrefix('!');
	}
]);

if(window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainApplicationModuleName]);
});