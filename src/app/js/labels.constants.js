(function() {
    'use strict';

    var labels;
    /* jshint ignore:start */
    labels = {
        NAVS: ['Home', 'About', 'Contact'],
        RCCG_NAME: 'RCCG House Of Praise Norfolk',
        INTRO_IMG: 'img/intro.jpg',
        BG_IMGS: ['hugs.jpeg','img/bgs/1.jpeg','img/bgs/2.jpeg','img/bgs/3.jpeg','img/bgs/4.jpeg','img/bgs/5.jpeg','img/bgs/6.jpeg','img/bgs/7.jpeg','img/bgs/8.jpeg',]
    };
    /* jshint ignore:end */

    angular.module('app').constant('labels', labels);

})();
