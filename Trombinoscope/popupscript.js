// Sélectionnez toutes les photos à partir de leur classe CSS
let photos = document.querySelectorAll(".galerie > div > img");

// Boucle à travers toutes les photos
for (let i = 0; i < photos.length; i++) {
  let photo = photos[i];

  // Sélectionnez le conteneur de la popup de chaque photo
  let container = photo.parentElement.nextElementSibling;

  // Ajouter l'événement "click" à la photo et au conteneur
  photo.addEventListener("click", function() {
    container.classList.toggle("active");
  });

  container.addEventListener("click", function(event) {
    event.stopPropagation();
    container.classList.toggle("active");
  });
}


function navigatePopup(direction, event) {
  let currentIndex = -1;

  for (let i = 0; i < photos.length; i++) {
    if (photos[i].parentElement.nextElementSibling.classList.contains("active")) {
      currentIndex = i;
      break;
    }
  }

  if (currentIndex >= 0) {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = photos.length - 1;
    if (newIndex >= photos.length) newIndex = 0;

    photos[currentIndex].parentElement.nextElementSibling.classList.toggle("active");
    photos[newIndex].parentElement.nextElementSibling.classList.toggle("active");
  }
}

let prevButtons = document.querySelectorAll(".prev-button");
let nextButtons = document.querySelectorAll(".next-button");

for (let i = 0; i < prevButtons.length; i++) {
  prevButtons[i].addEventListener("click", function(event) {
    event.stopPropagation(); // Ajoutez cette ligne
    navigatePopup(-1, event);
  });
  nextButtons[i].addEventListener("click", function(event) {
    event.stopPropagation(); // Ajoutez cette ligne
    navigatePopup(1, event);
  });
}








let JF = document.querySelector(".JF");
let JF_container = document.querySelector(".JF_container");
JF.addEventListener("click", function(){
    JF_container.classList.toggle("active")
})
JF_container.addEventListener("click", function(){
    JF_container.classList.toggle("active");
})

