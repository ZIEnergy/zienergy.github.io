<?php
    $myemail = "tehzienergy@gmail.com";
    $subject='=?UTF-8?B?'.base64_encode("Заявка с сайта mrtutu.ru").'?=';
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $mymessage = "
    Имя: $name
    Телефон: $phone";
    mail($myemail, $subject, $mymessage);
?>