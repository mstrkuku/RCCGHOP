(function(){
    'use strict';
    angular
        .module('app')
        .config(routesConfig);

    /** @ngInject */
    function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .when("", "/main/home")
            .otherwise('/');

        $stateProvider
        //Container for the ui views
            .state('main', {
                url: '/main',
                templateUrl: 'js/main/main.tpl.html'
            })

            /*Home*/
            .state('main.home', {
                url: '/home',
                template: '<home>'
            })

            /* About*/
            .state('main.about', {
                url: '/about',
                template: '<about>'
            })

            /* Contact */
            .state('main.contact', {
                url: '/contact',
                template: '<contact>'
            });
        }
})();