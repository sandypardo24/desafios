import React from "react";
import CardPizza from "./CardPizza";

const Home = ({ setCart, cart }) => {
  // Función para aumentar la cantidad de pizzas en el carrito
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id && pizza.quantity < pizza.stock
        ? { ...pizza, quantity: pizza.quantity + 1 }
        : pizza
    );
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad de pizzas en el carrito
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id && pizza.quantity > 0
        ? { ...pizza, quantity: pizza.quantity - 1 }
        : pizza
    );
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <div className="row">
        {cart.map((pizza) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={pizza.id}>
            <CardPizza
              pizza={pizza}
              increaseQuantity={() => increaseQuantity(pizza.id)}
              decreaseQuantity={() => decreaseQuantity(pizza.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
