(function(){
	'use strict';
	angular.module('app', ['firebase', 'ui.router', 'ui.bootstrap'])
        .config(function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);

        })
})();
