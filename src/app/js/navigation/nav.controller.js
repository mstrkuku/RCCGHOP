(function() {
    'use strict';
    angular.module('app')
        .controller("NavCtrl", NavCtrl);

    NavCtrl.$inject = [
        '$scope',
        'CommonSvc',
        'labels',
        '$log'
    ];

    function NavCtrl(
        $scope,
        CommonSvc,
        labels,
        $log
    ) {
        var vm = this;

        vm.labels = labels;
        CommonSvc.activeState = "Home";
        $scope.navbarItems = CommonSvc.navbarItems;
        // $scope.activeMenu = CommonSvc.activeState;

        $scope.setActive = function(menuItem) {
            $scope.activeMenu = menuItem;
            console.log(menuItem);
        };

        activate();

        function activate() {
            console.log('nav directive loaded');
            $log.debug("CommonSvc Active State is: ", CommonSvc.activeState);

        }

        vm.test = function() {
            // CommonSvc.test;
        };
    }

})();
