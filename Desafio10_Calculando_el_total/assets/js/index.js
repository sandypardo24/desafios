let precio = 400000;
let cantidad = 0;

const precioIni = document.querySelector(".precio-inicial");
const cantidadProd = document.querySelector(".cantidad");
const valorTotal = document.querySelector(".valor-total");
const darkModeBtn = document.querySelector(".dark-mode");

precioIni.innerHTML = precio;
valorTotal.innerHTML = precio * cantidad;

/* -------------- ARROW FUNCTION -------------- */
const suma = () => {
  let totales = Number(cantidadProd.innerHTML);
  totales = totales + 1;
  cantidadProd.innerHTML = totales;
  valorTotal.innerHTML = precio * totales;
};

const resta = () => {
  let totales = Number(cantidadProd.innerHTML);
  if (totales > 0) {
    totales = totales - 1;
  }
  cantidadProd.innerHTML = totales;
  valorTotal.innerHTML = precio * totales;
};
