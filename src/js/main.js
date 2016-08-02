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
    let $shadeLayout = $('.js-shade');  //遮罩层
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
    $mobileNavBtn.on('click', closeMobileNav);
    //点击遮罩层关闭导航
    function closeMobileNav() {
        if (!$mobileNav.hasClass('in')) {
            ShadeL.show(closeMobileNav);
            $mobileNavBtn.addClass('open');
            $mobileNav.addClass('in');
        } else {
            ShadeL.hide();
            $mobileNavBtn.removeClass('open');
            $mobileNav.removeClass('in');
        }
    }

    // shade 层方法
    const ShadeL = {
        show: callback => {
            //显示遮罩 并 添加事件监听
            $shadeLayout.addClass('show').off('click').on('click', callback);
        },
        hide: () => {
            $shadeLayout.removeClass('show').off('click'); //隐藏遮罩
        }
    }

    //function END
})