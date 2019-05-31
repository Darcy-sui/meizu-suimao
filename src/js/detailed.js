// 购物车二级导航
$(function() {
    $('#meizu-header-cart').hover(function() {
        $('.meizu-header-cart-dl').show()
    }, function() {
        $('.meizu-header-cart-dl').hide()
    })

    //头部的向上隐藏
    $('.nav').css('margin-top', '-82px')
    $('body').mousewheel(function(event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        var scroll = $(window).scrollTop();
        if (dir == 'Up' && scroll == 0) {
            $('.nav').css('margin-top', '0px')
        }
    });
})