document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulaireContactes");
    const messageContainer = document.getElementById("message-container");
    const messageContent = document.getElementById("message-content");
    const closeMessageButton = document.getElementById("close-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = sanitizeInput(form.querySelector("#name").value);
        const email = sanitizeInput(form.querySelector("#email").value);
        const message = sanitizeInput(form.querySelector("#message").value);

        // Vérification de la validité de l'adresse e-mail
        if (!isValidEmail(email)) {
            showMessage("L'adresse e-mail n'est pas valide.", "error");
            return;
        }

        // Vérification que tous les champs sont remplis
        if (!name || !email || !message) {
            showMessage("Veuillez remplir tous les champs du formulaire.", "error");
            return;
        }

        showMessage("Votre message a été validé avec succès.", "success");
 
 
 
 //        const formData = new FormData(form);
 //        fetch("URL_DE_VOTRE_API_MAILGUN", {
 //            method: "POST",
 //           headers: {
 //                Authorization: "Basic " + btoa("api:VOTRE_CLE_API"),
 //            },
 //            body: formData,
 //        })
 //            .then((response) => response.json())
 //            .then((data) => {
 //                if (data.id) {
 //                    showMessage("Votre message a été envoyé avec succès.", "success");
 //                } else {
 //                    showMessage("Une erreur s'est produite lors de l'envoi du message.", "error");
 //                }
 //            })
 //            .catch((error) => {
 //                showMessage("Une erreur s'est produite lors de l'envoi du message.", "error");
 //            });
    });

    function showMessage(message, messageType) {
        messageContent.innerHTML = message;
        messageContainer.className = messageType;
        messageContainer.style.display = "block";

        setTimeout(function () {
            closeMessage();
        }, 10000);
    }

    function closeMessage() {
        messageContainer.style.display = "none";
    }

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }

    function sanitizeInput(input) {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});
