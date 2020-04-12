<?php

$name = $_POST["name"];
$email = $_POST["email"];
$company = $_POST["company"];
$message = $_POST["message"];
$phone = $_POST["phone"];
$concerning = $_POST["concerning"];

if ($name != '' && strpos($email, '@') !== false && $message != '') {
        
    $subject = "Digital Witch Contact:".$name."from".$company."concerning:".$concerning;
    $content = "Name:".$name."\nCompany:".$company."\nConcerning:".$concerning."\nEmail:".$email."\nPhone:".$phone."\n\nMessage:\n".$message;

    $content = wordwrap($content,70);

    mail("digitalwitch@gmail.com", $subject, $content);

}

?>