document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");

  images.forEach((img, index) => {
    img.style.opacity = 0;
    img.style.transition = "opacity 1s ease";

    setTimeout(() => {
      img.style.opacity = 1;
    }, index * 300); // delay each image
  });
});