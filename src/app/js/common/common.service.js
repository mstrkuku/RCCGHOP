(function() {
  'use strict';
  angular.module('app')
    .service("CommonSvc", CommonSvc);

  CommonSvc.$inject = [
  	'labels',
  	'$log',
	'$rootScope',
	'$firebaseObject'
  ];

  function CommonSvc(
  	labels,
  	$log,
	$rootScope,
	$firebaseObject
  ) {

    var svc = this;
    svc.labels = labels;

    svc.navbarItems = ['home', 'about', 'contact'];
    svc.activeState = $rootScope.activeState;

	var ref = firebase.database().ref();
	svc.name = $firebaseObject(ref);
	svc.date = $rootScope.date = new Date().getDay();

	svc.todayIs = function() {

        if ($rootScope.date === 1) {
        	var today = 'monday';
        }

        if ($rootScope.date === 2) {
            var today = 'tuesday';
        }

        if ($rootScope.date === 3) {
            var today = 'wednesday';
        }

        if ($rootScope.date === 4) {
            var today = 'thursday';
        }

        if ($rootScope.date === 5) {
            var today = 'friday';
        }

        if ($rootScope.date === 6) {
            var today = 'saturday';
        }

        if ($rootScope.date === 0) {
            var today = 'sunday';
        }
        return today;
    };

	console.log(svc.todayIs() + ' ' + svc.date);
	svc.test = function(){
		$log.debug('Testing $log in CommonSvc');
		return console.log('running test service function');
	};

	return svc;
  }
})();
