document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("toggle-image");

  image.addEventListener("click", function () {
    image.classList.toggle("border-red");
  });
});
