const Header = () => {
  return (
    <header
      className="header bg-dark text-white text-center py-5"
      style={{
        backgroundImage: "url('./src/img/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
