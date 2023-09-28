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

    $name = sanitize_input( getenv("NAME") );
    $email = sanitize_input( getenv("EMAIL") );
    $message = sanitize_input( getenv("MESSAGE") );

    try {
        $mail = new PHPMailer(true);

        // Paramètres SMTP Gmail
        $mail->SMTPDebug = 2; // Désactiver le débogage SMTP
          $mail->Debugoutput = 'error_log'; // Écrit les informations de débogage dans le journal PHP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv("SMTP_ADRESS");
        $mail->Password = getenv("SMTP_P");
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Paramètres de l'e-mail
        $mail->setFrom( "FORMULAIRE.SITE.NOUVEAU.MESSAGE@NePasRepondre.ok" );
        $mail->addAddress(getenv("SMTP_ADRESS"));
//        $mail->addReplyTo($email);
        $mail->Subject = "Nouveaux message formulaire de contact";
        $message = "Message :   $email  \n\n  $name \n\n $message \n\n " ;
        $mail->Body = $message;

        // Envoi de l'e-mail
        $mail->send();
           echo "ECHO : Votre message a été envoyé avec succès.  {$mail->ErrorInfo} ";
    } catch (Exception $e) {
           echo "Une erreur s'est produite lors de l'envoi de votre message : {$mail->ErrorInfo}";
    }
?>
