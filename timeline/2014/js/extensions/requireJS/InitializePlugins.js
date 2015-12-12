require.config({
	baseUrl: './extensions',
	paths: {
		'domReady': 'requireJS/domReady',
		'angular': 'angularJS/angular.min',
		'angular-mocks': 'angularJS/angular-mocks',
		'angular-resource': 'angularJS/angular-resource',
		'angular-route': 'angularJS/angular-route',
		'jquery': 'jquery/jquery-1.10.2.min',
		'p_bootstrap': 'bootstrap/js/bootstrap.min',
		'p_html5media': 'html5media.min',
		'p_mediaelement': 'mediaelement/mediaelement-and-player.min',
		'p_fittext': 'fittext/jquery.fittext',
		'p_alloyimage': 'alloyimage/alloyimage-1.1',
		'p_timeline': 'timeline/js/storyjs-embed'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'p_bootstrap': {
			deps: ['jquery','css!bootstrap/css/bootstrap.min.css']
			//exports: 'BootStrap'
		},
		'p_mediaelement': {
			deps: ['jquery','css!mediaelement/mediaelementplayer.css']
			//exports: 'Mediaelement'
		},
		'angular-mocks': ['angular'],
		'angular-route': ['angular'],
		'angular-resource': ['angular']
	},
	map: {
		'*': {
			'css': 'requireJS/css.min'
		}
	}
});

if (typeof define !== 'function') {
  // to be able to require file from node
  var define = require('amdefine')(module);
}

define(['require', 'angular', '../js/apps', '../js/routes','p_bootstrap'], function (require, angular) {
  'use strict';
  /*place operations that need to initialize prior to app start here
   * using the `run` function on the top-level module
   */
  require(['domReady!'], function (document) {
    /* everything is loaded...go! */
    angular.bootstrap(document, ['webApp']);
  });
});


// define(['jquery', 'domReady', 'p_mediaelement', 'p_bootstrap', 'p_html5media', 'p_timeline'], function($,domReady) {
	// domReady(function () {
    // This function is called once the DOM is ready.
    // It will be safe to query the DOM and manipulate
    // DOM nodes in this function.
		// $('audio').mediaelementplayer = function() {
			// return Mediaelement.mediaelementplayer();
		// };
		// $('audio').mediaelementplayer();
	// });
// });
