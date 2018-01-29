(function() {
    'use strict';
    angular.module('app')
        .controller("AboutCtrl", AboutCtrl);
    AboutCtrl.$inject = [
        '$scope',
        'CommonSvc',
        '$log'
    ];

    function AboutCtrl(
        $scope,
        CommonSvc,
        $log
    ) {
        var vm = this;
        vm.labels = CommonSvc.labels;

        vm.about = [
            {
                title:'history',
                description:'House of Praise is a ministry of the Redeemed Christian Church of God (RCCG), ' +
                            'which was established in Lagos, Nigeria in 1952. The General Overseer of the church is Pastor E.A. Adeboye.' +
                            ' This ministry has over 5000 parishes worldwide and a membership of over 5 million worshipers worldwide.\n',
                imgPath:'img/bgs/1.jpeg'
            },

            {
                title:'mission',
                description:'To make heaven.\n'+
                            'To take as many people with us.\n' +
                            'To have a member of RCCG in every family of all nations.\n'+
                            'To bring back the souls that were lost to Christ, give sight to the spiritually blind,' +
                            ' and comfort the brokenhearted through the living word of God by preaching Christ to every' +
                            ' people of all race.',
                imgPath:'img/bgs/2.jpeg'
            },

            {
                title:'vision',
                description:'At House of Praise, we see God at work building transformed humanity.' +
                            'This great company of God\'s people will:\n' +
                            '• Live victoriously\n' + '' +
                            '• Display Excellence in life\n' +
                            '• Achieve Greatness in life\n' +
                            '• Access God\'s Reason for Creating them\n' +
                            '• Fulfill God \'s Calling upon their life',
                imgPath:'img/bgs/3.jpeg'
            }
        ];

        vm.coreValues = [
            {
                summary: 'We have set ourselves a challenging brief, it is conscious. We will achieve a high standard in life and ministry as we individually and corporately commit ourselves to the following Core Values: '
            },
            {
                summary: '• Holiness - Our hearts will pant after God, ',
                paragraph: 'Our will have chosen to bow before His will, we will seek His truth in our inward parts, we will be open to the light of heaven in our dark places.',
            },
            {
                summary: '• Excellence - Our hands will work hard,',
                paragraph: 'Our minds will be engaged, our model will be the Lord, who by the Spirit of Excellence made the Heavens and the Earth.',
            },
            {
                summary: '• Leadership - Leadership is a privilege. ',
                paragraph: 'It is to be among God\'s people as He that serves, it is to follow in the pathway of the Lord who humbled himself to the point of death, it is to identify with the gentle Spirit who will not allow himself to be the focus of attention; it is to seek the Father, who got into the mud to serve eternity the mystery of created man. We will seek to be like Him, who is One and yet a Community of Beings in Communion.',
            },
            {
                summary: '• Love - We are called to love. ',
                paragraph: 'We are His image who is the I AM, we can give from that which we have so freely and so fully received, by loving we are the channel of God\'s flow among men: so we will Care Passionately about our Call to Love.',
            },
            {
                summary: '• Obedience - Obedience is our Key to Healing. ',
                paragraph: 'When we heed the words that He Sends, He will Heal us of all our diseases (Soul, Spirit, Body). We are passionate about Obedience because it is His Key for Our Health.',
            }
        ];

        // $scope.stretch = 0;

        activate();

        function activate() {
            CommonSvc.activeState = 'about';
            console.log('about directive loaded');
            $log.debug("CommonSvc", CommonSvc.activeState);
            vm.addAccordionToCoreValues;
        }

        vm.test = function() {
            CommonSvc.test;
        };

        vm.addAccordionToCoreValues = (function(){
            for (var x = 0; x < vm.coreValues.length; x++) {
                vm.coreValues[x].stretch = function() {
                    var acc = document.getElementsByClassName("accordion");
                    for (var i = 0; i < acc.length; i++) {
                        acc[i].onclick = function() {
                            this.classList.toggle("active");
                            this.nextElementSibling.classList.toggle("show");
                        }
                    }
                }
            }
        })();
    }

})();
