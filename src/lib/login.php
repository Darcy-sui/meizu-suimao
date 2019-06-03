<?php
    include('../lib/conn.php');

    $username = $_REQUEST['usersname'];
    $password = $_REQUEST['password'];

    $sql = "select * from usersname where usersname='$username' and password='$password'";
    
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        echo "<script>alert('登陆成功,点击跳转');location.href='../html/shop.html';</script>";
    }else{
        echo "<script>alert('登陆失败,点击跳转');location.href='../html/Login.html';</script>";
    }
?>