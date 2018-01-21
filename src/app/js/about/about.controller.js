(function() {
    'use strict';
    angular.module('app')
        .controller("AboutCtrl", AboutCtrl);
    AboutCtrl.$inject = [
        'CommonSvc',
        '$log'
    ];

    function AboutCtrl(
        CommonSvc,
        $log
    ) {
        var vm = this;

        activate();

        function activate() {
            CommonSvc.activeState = 'about';
            console.log('about directive loaded');
            $log.debug("CommonSvc", CommonSvc.activeState);

            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function() {
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }

        }

        vm.test = function() {
            CommonSvc.test;
        };
    }

})();
