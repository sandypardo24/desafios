import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: 🍕{ingredients.join(", ")}</p>
        <p className="price">Precio: ${price.toLocaleString()}</p>
        <div>
          <button className="btn btn-primary"> 👀 Ver más</button>
          <button className="btn btn-success"> 🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
