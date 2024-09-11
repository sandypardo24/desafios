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
      </div>
    </div>
  );
};

export default Home;
