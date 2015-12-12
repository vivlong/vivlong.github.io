/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
  'angular',
  'config',
  'modules/home/index'
], function (ng) {
  'use strict';

  return ng.module('webApp', [
	'ngRoute',
    'webApp.constants',
    'webApp.home'
  ]);
});
