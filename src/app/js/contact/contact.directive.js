(function() {
    'use strict';
    angular.module('app')
        .directive('contact', function() {
            return {
                templateUrl: 'js/contact/contact.tpl.html',
                controller: 'ContactCtrl',
                controllerAs: 'vm'
            };
        });
})();
