# not used !!! 
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "noobability21@gmail.com";
    $subject = "Question about the Free Store";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>