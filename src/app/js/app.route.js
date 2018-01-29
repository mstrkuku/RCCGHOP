(function(){
    'use strict';
    angular
        .module('app')
        .config(routesConfig);

    /** @ngInject */
    function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .when("", "/home/welcome")
            .otherwise('/');

        $stateProvider
        //Container for the ui views
            .state('home', {
                url: '/home',
                templateUrl: 'js/home/home.tpl.html'
            })

            /*Welcome*/
            .state('home.welcome', {
                url: '/welcome',
                template: '<welcome>'
            })

            /* About*/
            .state('home.about', {
                url: '/about',
                template: '<about>'
            })

            /* Contact */
            .state('home.contact', {
                url: '/contact',
                template: '<contact>'
            });
        }
})();