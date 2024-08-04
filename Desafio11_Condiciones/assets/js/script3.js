document.addEventListener("DOMContentLoaded", function () {
  const digit1 = document.getElementById("digit1");
  const digit2 = document.getElementById("digit2");
  const digit3 = document.getElementById("digit3");
  const ingresarButton = document.getElementById("ingresar");
  const resultado = document.getElementById("resultado");

  ingresarButton.onclick = function () {
    const password = digit1.value + digit2.value + digit3.value;

    if (password === "911") {
      resultado.textContent = "password 1 correcto";
    } else if (password === "714") {
      resultado.textContent = "password 2 es correcto";
    } else {
        resultado.textContent = "password incorrecto";
    }
    }
});