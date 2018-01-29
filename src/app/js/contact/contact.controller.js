(function() {
    'use strict';
    angular.module('app')
        .controller("ContactCtrl", ContactCtrl);
    ContactCtrl.$inject = [
        'labels',
        'CommonSvc',
        '$scope',
        '$log'
    ];

    function ContactCtrl(
        labels,
        CommonSvc,
        $scope,
        $log
    ) {
        var vm = this;

        vm.todayIs = CommonSvc.todayIs();
        vm.labels = CommonSvc.labels;


        vm.schedule = [
            {day:'sunday', event:'Sunday Service', time: '9:30 AM to Noon', active: 'false'},
            {day:'monday', event:'', time: 'No Events', active: 'false'},
            {day:'tuesday', event:'Bible Study', time: '7 PM to 8:30 PM', active: 'false'},
            {day:'wednesday', event:'', time: 'No Events', active: 'false'},
            {day:'thursday', event:'Teleconference Prayer', time: '8 PM to 9 PM', active: 'false'},
            {day:'friday', event:'', time: 'No Events', active: 'false'},
            {day:'saturday', event:'Choir Rehearsal', time: '11 AM to Noon', active: 'false'}
        ];


        console.log(vm.schedule);

        $scope.setActive = function(theDay) {
            $scope.today = theDay;
        };

        for ( var theDay=0; theDay < vm.schedule.length; theDay++) {
            if(vm.todayIs === vm.schedule[theDay].day){
                vm.schedule[theDay].active = 'true';
            }
        }

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
