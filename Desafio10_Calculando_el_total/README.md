# Explicación del desafío

## Declaración e inicialización de variables:
***let precio = 400000;:*** Declara una variable precio y la inicializa con el valor 400000.

***let cantidad = 0;:*** Declara una variable cantidad y la inicializa con el valor 0.

## Selección de elementos del DOM:
1. ***const precioIni = document.querySelector(".precio-inicial");***
> - Selecciona el elemento del DOM con la clase .precio-inicial y lo asigna a la constante precioIni.

2. ***const cantidadProd = document.querySelector(".cantidad");***
> - Selecciona el elemento del DOM con la clase .cantidad y lo asigna a la constante cantidadProd.

3. ***const valorTotal = document.querySelector(".valor-total");***
> - Selecciona el elemento del DOM con la clase .valor-total y lo asigna a la constante valorTotal.

## Inicialización del contenido de los elementos del DOM:
***precioIni.innerHTML = precio;:*** Establece el contenido HTML del elemento precioIni al valor de precio (400000).

***valorTotal.innerHTML = precio * cantidad;:*** Establece el contenido HTML del elemento valorTotal al producto de precio y cantidad (400000 * 0 = 0).

## Funciones arrow suma y resta:

### **SUMA**
1. ***const suma = () => { ... };***
> - Declara una constante suma y la asigna a una función flecha.

2. ***let totales = Number(cantidadProd.innerHTML);***
> -  Obtiene el contenido actual de cantidadProd, lo convierte a un número y lo asigna a la variable totales.

3. ***totales = totales + 1;***
> - Incrementa el valor de totales en 1.

4. ***cantidadProd.innerHTML = totales;***
> - Actualiza el contenido HTML de cantidadProd con el nuevo valor de totales.

5. ***valorTotal.innerHTML = precio * totales;***
> - Actualiza el contenido HTML de valorTotal con el nuevo total calculado (producto de precio y totales).

### **RESTA**
1. ***const resta = () => { ... };***
> - Declara una constante resta y la asigna a una función flecha.

2. ***let totales = Number(cantidadProd.innerHTML);***
> - Obtiene el contenido actual de cantidadProd, lo convierte a un número y lo asigna a la variable totales.

3. ***if (totales > 0) { totales = totales - 1; }***
> - Disminuye el valor de totales en 1 solo si totales es mayor que 0 (para evitar números negativos).

4. ***cantidadProd.innerHTML = totales;***
> - Actualiza el contenido HTML de cantidadProd con el nuevo valor de totales.

5. ***valorTotal.innerHTML = precio * totales;***
> - Actualiza el contenido HTML de valorTotal con el nuevo total calculado (producto de precio y totales).