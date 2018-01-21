(function() {
  'use strict';
  angular.module('app')
    .service("CommonSvc", CommonSvc);

  CommonSvc.$inject = [
	  '$log',
	  '$rootScope',
	  '$firebaseObject'
  ];

  function CommonSvc(
	  $log,
	  $rootScope,
	  $firebaseObject
  ) {

    var svc = this;

    svc.activeState = $rootScope.activeState;
    svc.navbarItems = ['Home', 'About', 'Contact'];


      svc.setState = function(clickedState){
    	var clickedState = svc.activeState;
    };

	var ref = firebase.database().ref();
	svc.name = $firebaseObject(ref);


	// svc.scrollreveal = $require('../js/scrollreveal.js');

	svc.test = function(){
		$log.debug('Testing $log in CommonSvc');
		return console.log('running test service function');
	};

	return svc;
  }
})();
