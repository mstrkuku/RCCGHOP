(function() {
    'use strict';
    angular.module('app')
        .controller("NavCtrl", NavCtrl);

    NavCtrl.$inject = [
        '$scope',
        '$state',
        'CommonSvc',
        'labels',
        '$log'
    ];

    function NavCtrl(
        $scope,
        $state,
        CommonSvc,
        labels,
        $log
    ) {
        var vm = this;

        vm.labels = labels;
        CommonSvc.activeState = "Home";
        $scope.navbarItems = CommonSvc.navbarItems;
        $scope.activeMenu = CommonSvc.activeState;

        // console.log('dude', navbarItems);
        //on element nav-item click, add .active if remove .active class from all off them first
        // $scope.nav_item  = document.getElementsByClassName("nav-item");


        $scope.setActive = function(menuItem) {
            $scope.activeMenu = menuItem
        };

        activate();

        function activate() {
            // CommonSvc.activeState = 'home';
            console.log('nav directive loaded');
            // console.log('img path for intro', labels);
            $log.debug("CommonSvc Active State is: ", CommonSvc.activeState);

        }

        vm.test = function() {
            // CommonSvc.test;
        };
    }

})();
