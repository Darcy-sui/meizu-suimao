$(function() {
    $('.meizu-header-link>li').hover(function() {
        var index = $('.meizu-header-link>li').index(this);
        $('.meizu-header-sub').eq(index).slideDown()
        $('.header-nav-li>a').hover(function() {
            // console.log(1)
            $('.nav').addClass('background')
        }, function() {
            $('.nav').removeClass('background')
        })
        $('.meizu-header-sub').eq(index).hover(function() {
            var index = $('.meizu-header-sub').index(this)
            $('.meizu-header-link>li>a').eq(index).addClass('active')
            $('.nav').addClass('background')
            $(this).addClass('show')
        }, function() {
            $('.nav').removeClass('background')
            var index = $('.meizu-header-sub').index(this)
            $('.meizu-header-link>li>a').eq(index).removeClass('active')
            $(this).removeClass('show')
        })
    }, function() {
        var index = $('.meizu-header-link>li').index(this);
        $('.meizu-header-sub').eq(index).hide()
    });
});
// APP下载二级导航
$(function() {
    $('#app').hover(function() {
        $('.nav').addClass('background')
        var index = $('#app').index(this);
        $('.app-down-content').eq(index).slideDown()
        $('.app-down-content').eq(index).hover(function() {
            $('.nav').addClass('background')
            var index = $('.app-down-content').index(this)
            $('#app>a').eq(index).addClass('active')
            $(this).addClass('show')
        }, function() {
            $('.nav').removeClass('background')
            var index = $('.app-down-content').index(this)
            $('#app>a').eq(index).removeClass('active')
            $(this).removeClass('show')
        })
    }, function() {
        $('.nav').removeClass('background')
        var index = $('#app').index(this);
        $('.app-down-content').eq(index).hide()
    });
});