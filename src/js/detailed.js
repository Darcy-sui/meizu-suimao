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


    var id = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../lib/detailed.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(response) {
            var pic = JSON.parse(response.pic);
            var template = `
            <div class="fast-nav">
                <div class="good-center">
                    <ol class="clear">
                        <li><a href="#">概述</a></li>
                        <li style="border-right:0;"><a href="#">参数</a></li>
                    </ol>
                    <h2>${response.title}</h2>
                </div>
            </div>
            <!-- 商品详情 -->
            <section class="container clear">
                <!-- 图片 -->
                <div class="goods-left-pic">
                    <img src="${pic[0].src}">
                </div>
                <!--商品简介-->
                <div class="goods-right-detailed">
                    <div class="goods-right-title">
                        <h1>${response.title}</h1>
                        <p> ${response.title}</p>
                    </div>
                    <!-- 价格 -->
                    <div class="goods-right-price">
                        <span>
                          <i>￥</i>
                          <em>${response.price}</em>
                       </span>
                    </div>
                    <!-- 服务 -->
                    <div class="goods-right-service">
                        <ol class="clear">
                            <li>支持</li>
                            <li><i>√</i>花呗分期</li>
                            <li><i>√</i>顺丰发货</li>
                            <li><i>√</i>7天无理由退货</li>
                        </ol>
                        <p>配送服务&nbsp;&nbsp;&nbsp;&nbsp;本商品由&nbsp;&nbsp; 魅族&nbsp;&nbsp;负责发货并提供售后服务<em>😊商城客服</em></p>
                    </div>
                    <!-- 商品数量 -->
                    <div class="goods-num">
                        <label>数量</label>
                      
                        <input type="number" value="1" min="1" max="${response.num}" id="num"style="width:200px;">
                    </div>
        
                    <div class="goods-btn">
                        <a href="#" class="goods-btn-first">立即购买</a>
                        <a href="../html/shop.html" class="goods-btn-second" id="add" >加入购物车</a>
                    </div>
                </div>
            </section>
       
                `;
            // console.log($('.good-wrapper').append(template).find('#add'))
            $('.good-wrapper').append(template)
                .find('#add').on('click', function() {
                    addShopCar(response.id, response.price, $('#num').val());
                    // console.log($('#num').val())
                });
        }
    });

    function addShopCar(id, price, num) {
        var shop = cookie.get('shop'); //从cookie获取shop
        var product = {
            "id": id,
            "price": price,
            "num": num
        };

        if (shop) {
            shop = JSON.parse(shop); // cookie中如果有数据 这个数据是json字符串 转成对象

            if (shop.some(elm => elm.id == id)) {
                shop.forEach(function(elm, i) {
                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }




    }




})