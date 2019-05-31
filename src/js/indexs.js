$(function() {
    $.ajax({
        type: "get",
        url: "../lib/getproduct.php",
        dataType: "json",
        success: function(response) {
            var prolist = $('#prolist');
            var template = '';
            response.forEach(function(elm, i) {
                var pic = JSON.parse(elm.pic);

                template = `
                <li id="big">
                            <a href="#">
                                <img src=".${pic[0].src}">
                                <span class="box-info good-box">
                                    <span class="good-name"> ${elm.title}</span>
                                <span class="good-title"> ${elm.details}</span>
                                <span class="good-price">
                                        <i>￥</i>
                                        ${elm.price}
                                    </span>
                                </span>
                                <em>新品</em>
                            </a>
                        </li>
               `;
                prolist.append(template);
            });

        }
    });
});