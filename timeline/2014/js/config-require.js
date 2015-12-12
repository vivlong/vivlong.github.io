if (typeof define !== 'function') {
  // to be able to require file from node
  var define = require('amdefine')(module);
}

define({
	baseUrl: './js',
	//enforceDefine: true,
	paths: {
		'angular':			'./extensions/angularJS/angular',
		'angular-resource': './extensions/angularJS/angular-resource',
		'async':			'./extensions/requireJS/async',
		'domReady': 		'./extensions/requireJS/domReady',
		'angular-mocks': 	'./extensions/angularJS/angular-mocks',
		'angular-route': 	'./extensions/angularJS/angular-route',
		'jquery': 			'./extensions/jquery/jquery-1.10.2.min',
		'p_bootstrap': 		'./extensions/bootstrap/js/bootstrap.min',
		'p_html5media': 	'./extensions/html5media.min',
		'p_mediaelement': 	'./extensions/mediaelement/mediaelement-and-player.min',
		'p_fittext': 		'./extensions/fittext/jquery.fittext',
		'p_alloyimage': 	'./extensions/alloyimage/alloyimage-1.1',
		'p_timeline': 		'./extensions/timeline/js/storyjs-embed'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'p_bootstrap': {
			deps: ['jquery','css!./extensions/bootstrap/css/bootstrap.min.css']
			// exports: 'BootStrap'
		},
		'p_mediaelement': {
			deps: ['jquery','css!./extensions/mediaelement/mediaelementplayer.css']
			// exports: 'Mediaelement'
		},
		'angular-mocks': ['angular'],
		'angular-resource': ['angular'],
		'angular-route': ['angular']
	},	
	map: {
		'*': {
			'css': './extensions/requireJS/css.min'
		}
	}
});
