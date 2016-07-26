/**
 * semfeng 主js文件
 */
"use strict";
require('../style.css');
// require('./index.slide.js');

$(function () {
    //变量
    let $dropDown = $('.js-dropdown');
    let $search = $('#mainSearch');
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
        input:function(){
            if(!$(this).val()){
                $search.removeClass('active');
            }
        },
        mouseout:function(){
            if(!$(this).val()){
                $search.removeClass('active');
            }
        }
    });

    //function END
})