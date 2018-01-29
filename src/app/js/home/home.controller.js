(function() {
    'use strict';
    angular.module('app')
        .controller("HomeCtrl", HomeCtrl);
    HomeCtrl.$inject = [
        // 'scope',
        // '$timeout',
        'CommonSvc',
        'labels',
        '$log'
    ];

    function HomeCtrl(
        // $scope,
        // $timeout,
        CommonSvc,
        labels,
        $log
    ) {
        var vm = this;

        vm.labels = labels;

        activate();

        function activate() {
            CommonSvc.activeState = 'home';
            console.log('home directive loaded');
            console.log('img path for intro', labels);
            $log.debug("CommonSvc", CommonSvc.activeState);

        }

        vm.test = function() {
            // CommonSvc.test;
        };
    }

})();
