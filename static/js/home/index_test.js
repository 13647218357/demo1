"use strict";

require(['../require-config'], function () {
    require(["jquery", "jqueryui", "fullpage"], function ($, jqueryui, fullpage) {
        if ($.browser.msie && $.browser.version < 10) {
            $('body').addClass('ltie10');
        }
        $(document).ready(function () {
            $('#fullpage').fullpage({
                sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
                menu: '#menu', //文字导航
                scrollingSpeed: 1000, //滑动速度
                slidesNavigation: true });
        });
    });
});