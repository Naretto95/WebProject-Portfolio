<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'Nom requis', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Email requis', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Format d\'email invalide', 'code' => 0));
  exit();
  }
}
if ($subject === ''){
  print json_encode(array('message' => 'Sujet requis', 'code' => 0));
  exit();
}
if ($message === ''){
  print json_encode(array('message' => 'Message requis', 'code' => 0));
  exit();
}
$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = "narettolilian@hotmail.fr";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Erreur!");
print json_encode(array('message' => 'Email envoyé !', 'code' => 1));
exit();
?>