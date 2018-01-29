(function() {
    'use strict';
    angular.module('app')
        .directive('navbar', ['CommonSvc', '$state', function(CommonSvc, $state) {
            return {
                templateUrl: 'js/navigation/nav.tpl.html',
                controller: 'NavCtrl',
                controllerAs: 'vm'
            };
        }]);
})();
