(function() {
    'use strict';
    angular.module('app')
        .directive('navbar', ['CommonSvc', function(CommonSvc) {
            // var vm = this;
            var navbarItems = CommonSvc.navbarItems;

            console.log(navbarItems);

            return {
                templateUrl: 'js/navigation/nav.tpl.html'
            };
        }]);
})();
