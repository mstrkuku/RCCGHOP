(function() {
    'use strict';
    angular.module('app')
        .directive('home', function() {
            return {
                templateUrl: 'js/home/home.tpl.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            };
        });
})();
