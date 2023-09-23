<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    // Vérification de l'adresse e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "L'adresse e-mail n'est pas valide.";
        exit;
    }

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
        $mail->setFrom($email, $name);
        $mail->addAddress('@email.com'); // Adresse e-mail de destination
        $mail->addReplyTo($email);
        $mail->Subject = 'Nouveau message depuis le formulaire de contact';
        $message = "Message : $message\n\nInformations de débogage : \n" . $mail->ErrorInfo;
        $mail->Body = $message;

        // Envoi de l'e-mail
        $mail->send();
 //       echo "Votre message a été envoyé avec succès.";
    } catch (Exception $e) {
 //       echo "Une erreur s'est produite lors de l'envoi de votre message : {$mail->ErrorInfo}";
    }
} else {
 //   echo "Accès refusé.";
}
?>
