(function() {
    'use strict';
    angular.module('app')
        .directive('about', function() {
            return {
                templateUrl: 'js/about/about.tpl.html',
                controller: 'AboutCtrl',
                controllerAs: 'vm'
            };
        });
})();
