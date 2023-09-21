 // Création de l'animation
    function matrixRain() {
      // Tableau de caractères à afficher
      var characters = "&=+0123456789%ABCDEFG%HIJKLMN%OPQRSTU%VW%XYZ#$*$$??/!>>%<%<%&abcdefghij%klmnopqrstu%vwxyz+=-)]@[({#";

      // Taille de la fenêtre
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;

      // Création des éléments HTML
      var canvas = document.getElementById("matrix-rain");
      var context = canvas.getContext("2d");

      // Taille du canvas
      canvas.height = windowHeight;
      canvas.width = windowWidth;

      // Tableau de caractères en mouvement
      var streams = [];

      // Création d'un stream de caractères
      function createStream() {
        var stream = [];

        // Nombre de caractères dans le stream
        var streamLength = Math.floor(Math.random() * 50) + 50;

        // Création des caractères et ajout à la liste
        for (var i = 0; i < streamLength; i++) {
          var character = {
            x: i * 25,
            y: Math.floor(Math.random() * windowHeight) + 1,
            speed: Math.random() * 49 + 1,
            character: characters[Math.floor(Math.random() * characters.length)],
          };
          stream.push(character);
        }

        // Ajout du stream à la liste
        streams.push(stream);
      }

      // Création de n streams de caractères
      for (var i = 0; i < windowWidth / 20; i++) {
        createStream();
      }

      // Mise à jour de l'animation
      function update() {
        // Effacement du canvas
	context.fillStyle = "black";        
        context.fillRect(0, 0, windowWidth , windowHeight );

        // Mise à jour de chaque stream de caractères
        for (var i = 0; i < streams.length; i++) {
          var stream = streams[i];
          for (var j = 0; j < stream.length; j++) {
            var character = stream[j];

            // Déplacement du caractère vers le bas
            character.y += character.speed;

            // Si le caractère sort de l'écran, on le remet en haut
            if (character.y > windowHeight) {
              character.y = 0;
            }

            // Dessin du caractère
            context.fillStyle = "red";
            context.font = "8px monospace";
            context.fillText(character.character, character.x, character.y);
          }
        }

        // Mise à jour de l'animation toutes les 30ms
        setTimeout(update, 1);
      }

      // Démarrage de l'animation
      update();
    }

    // Appel de la fonction matrixRain
    matrixRain();
    
	// Fonction pour mettre à jour la taille du canvas
	function resizeCanvas() {
  		canvas.width = window.innerWidth;
        	canvas.height = window.innerHeight;
	}

	// Mettre à jour la taille du canvas lors du chargement initial de la page
	resizeCanvas();

	// Ajouter un événement pour mettre à jour la taille du canvas lors d'un 		redimensionnement de la fenêtre
	window.addEventListener('resize', resizeCanvas);
