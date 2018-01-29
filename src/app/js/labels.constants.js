(function() {
    'use strict';

    var labels;
    /* jshint ignore:start */
    labels = {
        NAVS: ['Welcome', 'About', 'Contact'],
        RCCG_NAME: 'RCCG House Of Praise Norfolk',
        INTRO_IMG: 'img/intro.jpg',
        BG_IMGS: ['hugs.jpeg','img/bgs/1.jpeg','img/bgs/2.jpeg','img/bgs/3.jpeg','img/bgs/4.jpeg','img/bgs/5.jpeg','img/bgs/6.jpeg','img/bgs/7.jpeg','img/bgs/8.jpeg'],
        CONTACT_DATA: {
            ADDRESS: {
                STREET:'818 EAST LITTLE CREEK RD UNIT C',
                PO_BOX: 'P.O. BOX 14406',
                CITY: 'VIRGINIA BEACH',
                STATE: 'VA',
                ZIP: '23518'
            },
            NUMBER: '(757) 401-1135',
            EMAIL: 'norfolkhop@gmail.com'
        },
        RCCG_LOGO: 'img/icons/RCCG.png'
    };
    /* jshint ignore:end */

    angular.module('app').constant('labels', labels);

})();
