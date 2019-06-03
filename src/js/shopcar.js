$(function() {
    var shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        // console.log(shop)
        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "../lib/shop.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function(response) {
                console.log(response)
                var template = "";
                response.forEach(function(elm) {
                    console.log(elm);
                    var pic = JSON.parse(elm.pic);
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });
                    template = `
                    <li class="item">
                        <div class="c-box">
                            <input type="checkbox" id="p-${elm.id}">
                        </div>
                        <div class="p-img">
                            <img src="${pic[0].src}" alt="${pic[0].title}">
                        </div>
                        <div class="p-title">
                            ${elm.title}
                        </div>
                        <div class="p-num">
                            数量：<input type="number" value="${arr[0].num}" min="1" max="${elm.num}">
                        </div>
                        <div class="p-price">
                            单价:${elm.price}
                        </div>
                        <div class="p-sum">
                            总价:${(arr[0].num*elm.price).toFixed(2)}
                        </div>
                        <div class="del"><a href="#">删除</a></div>
                    </li>`;

                    $('.itemlist').append(template);
                });
                $('.del').on('click', function() {
                    var index = $('.del').index(this);
                    console.log(index)
                    shop.splice(index, 1);
                    window.location.reload()
                    cookie.set('shop', JSON.stringify(shop), 1);
                    $('.itemlist').remove(this.parentNode);
                })
            }
        });
    }
});