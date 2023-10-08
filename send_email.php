<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['firstName'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['comments'];

  // Set the recipient email address
  $recipient = "lamhan.food@gmail.com";

  // Set the email subject
  $email_subject = "New Contact Form Submission: $subject";

  // Build the email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n";
  $email_content .= "Subject: $subject\n\n";
  $email_content .= "Message:\n$message\n";

  // Build the email headers
  $email_headers = "From: $name <$email>";

  // Send the email
  if (mail($recipient, $email_subject, $email_content, $email_headers)) {
    echo "Thank you for contacting us. Your message has been sent.";
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>
