// Cambiar color de los divs a negro
const divs = document.querySelectorAll("#container > div");
divs.forEach((div) => {
  div.addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });
});

let colorSeleccionado;

document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");

  if (event.key === "a") {
    colorSeleccionado = "pink";
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "s") {
    colorSeleccionado = "orange";
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "d") {
    colorSeleccionado = "skyblue";
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "q") {
    createNewDiv("purple");
  } else if (event.key === "w") {
    createNewDiv("gray");
  } else if (event.key === "e") {
    createNewDiv("brown");
  }
});

// Función para crear un nuevo div //
function createNewDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.className = "new-div";
  newDiv.style.backgroundColor = color;
  document.getElementById("nuevoContainer").appendChild(newDiv);
}
