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
        oP[0].style.color = "#ccc";
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
            console.log($('.form-btn>input'))
            $('.form-btn>input').removeAttr('disabled');
        }
    }

})