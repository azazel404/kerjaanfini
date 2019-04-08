<?php

$email = $_POST['email'];

$msg = "hendra ganteng";

// send email
mail($email,"karakter anda",$msg);

?>