<?php
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "clark@clarkdonnell.dev";
    $headers = "From: $mailFrom";
    $txt = "You have received an e-mail from $name \n\n $message";

    mail($mailTo, $subject, $txt, $headers);
    echo("$mailTo, $Subject, $txt, $headers");
?>