// Fonction JavaScript à exécuter lors du clic sur le bouton
function onClickButton() {
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    const secretLienduRepo = "${{ secrets.SECRET_URL_REQUETTE }}";
    const secretTokenGitHub = "${{ secrets.SECRET_TOKTOK }}"; 
    // Construire le corps de la requête JSON
    const requestBody = {
        name: name,
        email: email,
        message: message
    };

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
}

// Associez la fonction onClickButton au clic du bouton
document.getElementById("submit_bouton").onclick = onClickButton;
