<?php

$name = $_POST['name'] ;
$email =$_POST['email'] ;
$message =  $_POST['message'];

$to = "conghdql4@outlook.com";
$subject = "From hodiencong.github.io by ".$name;
$headers = "From: " .$email;

mail($to,$subject,$message,$headers);