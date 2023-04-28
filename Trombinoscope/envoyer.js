document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitButton = contactForm.querySelector("button");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm(contactForm)) {
      submitButton.classList.add("vibrate");
      setTimeout(() => {
        submitButton.classList.remove("vibrate");
      }, 900);
    } else {
      // Soumettez le formulaire ou traitez les données ici
      // Réinitialisez le formulaire
      contactForm.reset();

      // Faites vibrer le bouton
      submitButton.classList.add("vibrate");
      setTimeout(() => {
        submitButton.classList.remove("vibrate");
      }, 900);
    }
  });
});

function validateForm(form) {
  // Vérifiez si le formulaire est entièrement et correctement rempli
  // Retournez true si le formulaire est valide, sinon retournez false

  const inputs = form.querySelectorAll("input");
  const textarea = form.querySelector("textarea");
  const select = form.querySelector("select");

  let isValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
    }
  });

  if (textarea.value.trim() === "" || select.value === "") {
    isValid = false;
  }

  return isValid;
}

// Récupération des éléments HTML pertinents
const contactForm = document.getElementById("contactForm");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const fermerPopup = document.getElementById("fermer-popup");

// Fonction pour afficher la popup de confirmation
function afficherPopup() {
  overlay.style.display = "block";
  popup.style.display = "block";
}

// Fonction pour masquer la popup de confirmation
function masquerPopup() {
  overlay.style.display = "none";
  popup.style.display = "none";
}

// Ajout d'un gestionnaire d'événements pour le formulaire
contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le formulaire de s'envoyer

  // Affiche la popup de confirmation
  afficherPopup();
});

// Ajout d'un gestionnaire d'événements pour le bouton de fermeture de la popup
fermerPopup.addEventListener("click", function() {
  // Masque la popup de confirmation
  masquerPopup();
});