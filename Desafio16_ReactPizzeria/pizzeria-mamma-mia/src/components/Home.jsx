import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="./src/img/Header.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="./src/img/Header2.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Pepperoni"
            price={10950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="./src/img/Header3.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Italiana"
            price={8540}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="./src/img/Header4.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Vegetariana"
            price={7950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="./src/img/Header5.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Margarita"
            price={12540}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="./src/img/Header6.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Formaggi"
            price={16000}
            ingredients={["mozzarella", "salsa de tomate", "parmesano", "roquefort"]}
            img="./src/img/Header7.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Hawai Tocino"
            price={5420}
            ingredients={["salsa de tomate", "tocino", "cebolla", "piña en cubos"]}
            img="./src/img/Header8.jpg"
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Ibérica"
            price={9990}
            ingredients={["mozarella", "jamon serrano", "rúcula", "parmesano"]}
            img="./src/img/Header9.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
