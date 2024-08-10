// Cambiar color de los divs a negro al hacer clic
const divs = document.querySelectorAll("#container > div");
divs.forEach((div) => {
  div.addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });
});

// Variable global para almacenar el color según la tecla presionada
let selectedColor;

document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");

  if (event.key === "a") {
    selectedColor = "pink";
    keyDiv.style.backgroundColor = selectedColor;
  } else if (event.key === "s") {
    selectedColor = "orange";
    keyDiv.style.backgroundColor = selectedColor;
  } else if (event.key === "d") {
    selectedColor = "skyblue";
    keyDiv.style.backgroundColor = selectedColor;
  } else if (event.key === "q") {
    createNewDiv("purple");
  } else if (event.key === "w") {
    createNewDiv("gray");
  } else if (event.key === "e") {
    createNewDiv("brown");
  }
});

// Función para crear un nuevo div con un color específico
function createNewDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.className = "new-div";
  newDiv.style.backgroundColor = color;
  document.getElementById("newDivContainer").appendChild(newDiv);
}
