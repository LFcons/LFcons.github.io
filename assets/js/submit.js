document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulaireContactes");
    const messageContent = document.getElementById("message-content");

    const secretLienduRepo = "${{ secrets.SECRET_URL_REQUETTE }}";
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
               "Authorization": "token " + secretTokenGitHub,
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               event_type: "submit_form",
               client_payload: requestBody
           })
       })
       .then(response => response.json())
       .then(data => {
           console.log("Réponse de l'API GitHub :", data);
           alert("Workflow déclenché avec succès !");
       })
       .catch(error => {
          // alert(response);
         //  console.error("Erreur lors de la soumission de la requête :", error);
           alert("Cette fonctionnalité du site n'est pas encore disponible.");
       });
    });
       function sanitizeInput(input) {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});


