<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $message = $_POST['message'];

    $to = "your-email@example.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $first_name $last_name\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = "From: noreply@skytex.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request!";
}
?>
