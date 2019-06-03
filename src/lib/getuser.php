<?php
    include('../lib/conn.php');

    $sql = "select * from usersname";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }
    
    $json = json_encode($arr);

    echo $json;
?>