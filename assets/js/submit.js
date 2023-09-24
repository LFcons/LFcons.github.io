document.addEventListener("DOMContentLoaded", function () {
       function sanitizeInput(input) {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const form = document.getElementById("formulaireContactes");
    const messageContent = document.getElementById("message-content");

    const secretLienduRepo = "https://api.github.com/repos/LFcons/lfcons.github.io/dispatches";
    const secretTokenGitHub = "${{ secrets.SECRET_TOKTOK }}"; 
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = sanitizeInput(form.querySelector("#name").value);
        const email = sanitizeInput(form.querySelector("#email").value);
        const message = sanitizeInput(form.querySelector("#message").value);

   	 // Construire le corps de la requête JSON
    	const requestBody = {
       	    name: name,
            email: email,
            message: message
        }

       // Effectuer une requête HTTP POST à l'API GitHub pour déclencher l'événement workflow_dispatch
       fetch(secretLienduRepo, {
           method: "POST",
           headers: {
               "Accept: application/vnd.github+json",
               "Authorization": "Bearer " + secretTokenGitHub,
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               event_type: "submit_form",
               client_payload: requestBody
           })
       })
       .then(response => response.json())
       .then(data => {
           //console.log("Réponse de l'API GitHub :", data);
           alert("Mail envoyé avec succès !");
       })
       .catch(error => {
           //console.error("Erreur lors de la soumission de la requête :", error);
           alert("Une erreur est survenue. Le mail n'a pas été envoyé.");
       });
    });
});
