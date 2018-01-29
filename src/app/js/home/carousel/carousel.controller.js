(function() {
    'use strict';
    angular.module('app')
        .controller("CarouselCtrl", CarouselCtrl);
    CarouselCtrl.$inject = [
        '$scope',
        '$timeout'
    ];

    function CarouselCtrl(
        $scope,
        $timeout
    ) {
        // $scope.myInterval = 3000;
        // $scope.slides = [
        //     {
        //         image: 'http://lorempixel.com/400/200/'
        //     },
        //     {
        //         image: 'http://lorempixel.com/400/200/food'
        //     },
        //     {
        //         image: 'http://lorempixel.com/400/200/sports'
        //     },
        //     {
        //         image: 'http://lorempixel.com/400/200/people'
        //     }
        // ];

        //10 seconds delay
        // $timeout(function(){
        //     $scope.test1 = "Hello World!";
        // }, 20000 );

        //time
        $scope.time = 0;
        $scope.picnum = 1;
        $scope.slideMessages = [
            'Message 1',
            'Another message 2',
            'Message Number 3',
            'Fourth Message 4th',
            'The 5th one.'
        ];
        $scope.carouselMessage = $scope.slideMessages[0];

        //timer callback
        // 1,2,3,4,5
        var timer = function() {
            if( $scope.time < 20000 ) {
                $scope.time += 1000;
                $timeout(timer, 1000);

                if ($scope.time === 2000) {
                    $scope.picnum = 1;
                    $scope.carouselMessage = $scope.slideMessages[0];
                }
                if ($scope.time === 6000) {
                    $scope.picnum = 2;
                    $scope.carouselMessage = $scope.slideMessages[1];
                }
                if ($scope.time === 10000) {
                    $scope.picnum = 3;
                    $scope.carouselMessage = $scope.slideMessages[2];
                }
                if ($scope.time === 14000) {
                    $scope.picnum = 4;
                    $scope.carouselMessage = $scope.slideMessages[3];
                }
                if ($scope.time === 18000) {
                    $scope.picnum = 'hugs';
                    $scope.carouselMessage = $scope.slideMessages[4];
                }
                if ($scope.time === 20000) {
                    $scope.time = 0;
                    $scope.carouselMessage = $scope.slideMessages[5];
                }
            }
        };

        //run!!
        $timeout(timer, 1000);
    }
})();