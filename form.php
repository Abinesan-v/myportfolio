<?php

 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['msg'];

$from = 'codersdemo.000webhostapp.com';
$to = 'tonystarkim77@gmail.com';
$body = "Name: $name.\n".
        "Email Id: $email.\n".
        "Message: $message.\n";
$headers = 'From: '.$from.
            'Reply-To: '.$email;
$subject = 'Message from users';
mail($to,$subject,$body,$headers);
header('location:index.php');



?>



