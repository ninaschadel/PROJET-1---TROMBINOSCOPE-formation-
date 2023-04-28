document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".galerie img");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Vérifie si l'image n'a pas déjà été animée
        if (!entry.target.classList.contains("fade-in")) {
          entry.target.classList.add("fade-in");
        }
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  }, options);

  images.forEach((img) => {
    observer.observe(img);
  });
});