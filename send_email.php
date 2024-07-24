<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "reedgunn2027@u.northwestern.edu";
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/html; charset=UTF-8";
    
    $body = "<html><body>";
    $body .= "<p>Name: $name</p>";
    $body .= "<p>Email: $email</p>";
    $body .= "<p>Message: $message</p>";
    $body .= "</body></html>";

    if (main($to, $subject, $body, $headers)) {
        echo "Message successfully sent!";
    } else {
        echo "Message delivery failed...";
    }
}