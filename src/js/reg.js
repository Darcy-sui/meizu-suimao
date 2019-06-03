$(function() {
    var oInput = $('form input');
    var oP = $('form p');
    oInput[0].onfocus = function() {

        oP[0].innerHTML = "请输入用户姓名";
        oP[0].style.color = "#ccc";
    }
    oInput[0].onblur = function() {
        if (this.value != "") {
            var reg = /^[\u4e00-\u9fa5]{2,4}$/;
            if (reg.test(this.value)) {
                this.dataset.pass = "true";
                oP[0].innerHTML = "通过";
                oP[0].style.color = "green"
            } else {
                this.dataset.pass = "false";
                oP[0].innerHTML = "用户名格式输入错误";
                oP[0].style.color = "red"
            }
        } else {
            oP[0].innerHTML = "用户不能为空"
            oP[0].style.color = "red"
        }
        check()


    }

    oInput[1].onfocus = function() {

        oP[1].innerHTML = "请输入用户密码";
        oP[1].style.color = "#ccc";
    }
    oInput[1].onblur = function() {
        if (this.value != "") {
            var reg = /^.{6,}$/;
            if (reg.test(this.value)) {
                this.dataset.pass = "true";
                oP[1].innerHTML = "通过";
                oP[1].style.color = "green"
            } else {
                this.dataset.pass = "false";
                oP[1].innerHTML = "用户密码格式输入错误";
                oP[1].style.color = "red"
            }
        } else {
            oP[1].innerHTML = "用户密码不能为空"
            oP[1].style.color = "red"
        }
        check()

    }

    function check() {
        var pass = $('input[data-pass="true"]');
        if (pass.length == 1) {
            // $('.form-btn>input').removeAttr('disabled');
            $.ajax({
                type: "get",
                url: "../lib/login.php",

                data: {
                    'usersname': username.val(),
                    'password': password.val()

                },
                success: function(data) {
                    console.log(data)
                    if (data == 1) {
                        $.cookie('usersname', usersname.val());
                        $.cookie('password', password.val());
                        window.location.href = "../html/index.html"
                    } else {
                        $('form p')[1].html('账号密码输入错误')
                    }
                }
            });
        } else {
            $('form p')[1].html('格式错误请从新输入')
                // $('form p')[1].html('格式错误请从新输入');

        }
    }

})