<?php

$name = htmlspecialchars(trim($_POST["name"]));
$email = $_POST["email"];
$message = $_POST["message"];
$phone = $_POST["phone"];
$interest = $_POST["interest"];

if ($name != '' && strpos($email, '@') !== false && $message != '') {
        
    $subject = "PAWP Volunteering:".$name."interest:".$interest;
    $content = "Name:".$name."\nArea of Interest:".$interest."\nEmail:".$email."\nPhone:".$phone."\n\nMessage:\n".$message;

    $content = wordwrap($content,70);

    mail("bouncecreativeindustries@gmail.com", $subject, $content);

}

?>