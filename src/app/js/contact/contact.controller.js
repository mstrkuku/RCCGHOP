(function() {
    'use strict';
    angular.module('app')
        .controller("ContactCtrl", ContactCtrl);
    ContactCtrl.$inject = [
        'CommonSvc',
        '$log'
    ];

    function ContactCtrl(
        CommonSvc,
        $log
    ) {
        var vm = this;

        activate();

        function activate() {
            CommonSvc.activeState = 'contact';
            console.log('contact directive loaded');
            $log.debug("CommonSvc", CommonSvc.activeState);

        }

        vm.test = function() {
            CommonSvc.test;
        };
    }

})();
