import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia!
        </a>
        <button className="btn btn-light">Home 🍕</button>
        {token ? (
          <>
            <button className="btn btn-light">Profile 👨‍💻</button>
            <button className="btn btn-light">Logout 🔐</button>
          </>
        ) : (
          <>
            <button className="btn btn-light">Login 🚪</button>
            <button className="btn btn-light">Register 🔐</button>
          </>
        )}
      </div>
      <div className="navbar-right">
        <button className="btn btn-light">
          {" "}
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
