<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

    // Fonction pour nettoyer et valider les données
    function sanitize_input($input) {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input);
        return $input;
    }

    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $message = sanitize_input($_POST["message"]);

    try {
        $mail = new PHPMailer(true);

        // Paramètres SMTP Gmail
        $mail->SMTPDebug = 0; // Désactiver le débogage SMTP
        // $mail->Debugoutput = 'error_log'; // Écrit les informations de débogage dans le journal PHP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv("SMTP_ADRESS");
        $mail->Password = getenv("SMTP_P");
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Paramètres de l'e-mail
        $mail->setFrom($email, $name);
        $mail->addAddress(getenv("SMTP_ADRESS"));
        $mail->addReplyTo($email);
        $mail->Subject = "$name Nouveau message formulaire de contact";
        $message = "Message : $message\n\n " ;
        $mail->Body = $message;

        // Envoi de l'e-mail
        $mail->send();
//        echo "Votre message a été envoyé avec succès.";
    } catch (Exception $e) {
//        echo "Une erreur s'est produite lors de l'envoi de votre message : {$mail->ErrorInfo}";
    }
//} else {
//    echo "Accès refusé.";
//    echo  $mail->ErrorInfo;
//}
?>
