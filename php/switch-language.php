<?php

$language = $_GET["language"];
$vn = 1;
$en = 2;
$jp = 3;
$csv= file_get_contents("../language.csv");
$array = array_map("str_getcsv", explode("\n", $csv));

$newArray = [];
foreach ($array as &$item) {
    
    if($language == "vn") {
        unset($item[$en]);
        unset($item[$jp]);
    }else if($language == "en") {
        unset($item[$vn]);
        unset($item[$jp]);
    } else {
        unset($item[$vn]);
        unset($item[$en]);
    }
    $newItem = array_values($item);
    array_push($newArray,$newItem);
}
$json = json_encode($newArray);
header('Content-type:application/json;charset=utf-8');
echo  $json ;
?>