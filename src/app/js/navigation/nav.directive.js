(function() {
    'use strict';
    angular.module('app')
        .directive('navbar', ['CommonSvc', function(CommonSvc) {
            return {
                templateUrl: 'js/navigation/nav.tpl.html',
                controller: 'NavCtrl',
                controllerAs: 'vm'
            };
        }]);
})();
