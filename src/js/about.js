// 请求头部到about
$.ajax({
    type: "get",
    url: "header.html",
    success: function(data) {
        var result = $(data);
        $('header').html(result);
    }
});
//请求footer到about
$.ajax({
    type: "get",
    url: "footer.html",
    success: function(data) {
        var result = $(data);
        $('footer').html(result);
    }
});
//tab
var aboutImg = $('.about-banner-img')
var aboutImgs = ['../img/b95804c0-06c7-4667-a803-c357fcd67727.webp', '../img/8880a7ab-b18e-49c3-9a8e-247951205d01.webp', '../img/41f21d02-2b56-4559-99cc-f03612d2eb26.webp']
$('.about-tabs__item').on('click', function() {
    var index = $('.about-tabs__item').index(this);
    $('.about-tabs__item').removeClass('about-active');
    console.log(aboutImgs[index])
    aboutImg.attr('src', aboutImgs[index])
    $(this).addClass('about-active');
    $('.about-panels__item').removeClass('about-show');
    $('.about-panels__item').eq(index).addClass('about-show');
    if (index != 3) {
        $('.address-container').css('display', 'none')
    } else {
        $('.address-container').css('display', 'flex')
    }
})