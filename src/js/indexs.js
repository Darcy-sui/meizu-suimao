$(function() {

    $.ajax({
        type: "get",
        url: "../lib/getproduct.php",
        dataType: "json",
        success: function(response) {
            var prolist = $('#prolist');
            var template = '';
            for (var i = 0; i < 2; i++) {
                var pic = JSON.parse(response[i].pic);
                var id = response[i].id;
                template = `
            <li id="big">
                <a href="../html/detailed.html?id=${id}" target="_blank">
                    <img src="${pic[0].src}">
                    <span class="box-info good-box">
                        <span class="good-name"> ${response[i].title}</span>
                    <span class="good-title"> ${response[i].details}</span>
                    <span class="good-price">
                            <i>￥</i>
                            ${response[i].price}
                        </span>
                    </span>
                    <em>新品</em>
                </a>
            </li>
   `;
                prolist.append(template);
            }
            for (var j = 2; j < 10; j++) {
                var pic = JSON.parse(response[j].pic);
                console.log(pic[0].src);
                var id = response[j].id;
                template = `
                <li>
                <a href="../html/detailed.html?id=${id}" target="_blank">
                    <img src="${pic[0].src}">
                    <span class="box-info top">
                        <span class="goods-name">${response[j].title}</span>
                    <span class="goods-title">${response[j].details}</span>
                    <span class="goods-price">
                            <i>￥</i>
                           ${response[j].price}
                        </span>
                    </span>
                    <em>领券</em>
                </a>
            </li>
   `;
                prolist.append(template);
            }
        }
    });

});