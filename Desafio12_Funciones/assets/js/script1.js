// Función que cambia el color del elemento clickeado
function pintar(element, color = "green") {
  element.style.backgroundColor = color;
}

// Selecciona el elemento y añade un event listener para cambiar el color al hacer clic
const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
