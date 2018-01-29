(function() {
    'use strict';
    angular.module('app')
        .directive('welcome', function() {
            return {
                templateUrl: 'js/welcome/welcome.tpl.html',
                controller: 'WelcomeCtrl',
                controllerAs: 'vm'
            };
        });
})();
