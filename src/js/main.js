/**
 * semfeng 主js文件
 */
"use strict";
require('../style.css');
// require('./index.slide.js');

$(function () {
    //变量
    let $dropDown = $('.js-dropdown');  //下拉
    let $search = $('#mainSearch'); //搜索
    let $mobileNav = $('#mobileNav');   //移动导航
    let $mobileNavBtn = $('#mobileNavBtn'); //移动导航按钮
    //dropdown
    $dropDown.hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });
    //search
    $search.find('input').on({
        focus: function () {
            $search.addClass('active');
        },
        input: function () {
            if (!$(this).val()) {
                $search.removeClass('active');
            }
        },
        mouseout: function () {
            if (!$(this).val()) {
                $search.removeClass('active');
            }
        }
    });
    // 移动胶囊导航
    $mobileNavBtn.on('click', function () {
        if (!$mobileNav.hasClass('in')) {
            $(this).addClass('open');
            $mobileNav.addClass('in');
        } else {
            $(this).removeClass('open');
            $mobileNav.removeClass('in');
        }
    });

    //function END
})