document.addEventListener("DOMContentLoaded", function () {
  const sticker1 = document.getElementById("sticker1");
  const sticker2 = document.getElementById("sticker2");
  const sticker3 = document.getElementById("sticker3");
  const verificarButton = document.getElementById("verificar");
  const resultado = document.getElementById("resultado");

  verificarButton.addEventListener("click", function () {
    const total =
      parseInt(sticker1.value) +
      parseInt(sticker2.value) +
      parseInt(sticker3.value);

    if (total <= 10) {
      resultado.textContent = `Llevas ${total} stickers`;
    } else {
      resultado.textContent = "Llevas demasiados stickers";
    }
  });
});
