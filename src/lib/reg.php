<?php
 include('../lib/conn.php');
    $username = $_POST['usersname'];
    $password = $_POST['password'];
    $sql = "select * from usersname where usersname='$username'";
   
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        die('用户名已存在');
    }
   
    $insertSql="INSERT INTO usersname (usersname, password) VALUES ('$username', '$password')";
 
    $res = $mysqli->query($insertSql);
   
    if($res){
        echo '<script>alert("注册成功");location.href="../html/Login.html";</script>';
    }

    $mysqli->close();  

?>