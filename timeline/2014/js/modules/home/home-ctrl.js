/**
 * Home controller definition
 * @scope Controllers
 */
define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('HomeController', function ($scope) {
		//$('audio').MediaElementPlayer();
		$scope.twoTimesTwo = 2 * 2;
		require(['jquery'], function (jq) {
			jq('audio').mediaelementplayer();
		});
	});

});
