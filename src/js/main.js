/**
 * semfeng 主js文件
 */
"use strict";
require('../style.css');
require('./index.slide.js');

$(function() {
    //变量
    let $dropDown = $('.js-dropdown');
    //dropdown
    $dropDown.hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
});
