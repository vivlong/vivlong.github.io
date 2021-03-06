/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */

 
define(['require','angular','angular-route','app','routes'], function (require, angular) {
  'use strict';
	/*place operations that need to initialize prior to app start here
	* using the `run` function on the top-level module
	*/
	require(['jquery','domReady!','p_html5media','p_bootstrap', 'p_mediaelement', 'p_timeline'], function ($,document) {
		/* everything is loaded...go! */
		angular.bootstrap(document, ['webApp']);
	});
});
