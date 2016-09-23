<?php
    $myemail = "tehzienergy@gmail.com";
    $subject='=?UTF-8?B?'.base64_encode("Заявка на рассылку с сайта mrtutu.ru").'?=';
    $email = htmlspecialchars($_POST["email"]);
    $mymessage = "
    E-mail: $email
    mail($myemail, $subject, $mymessage);
?>