import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";

// las funciones declaratorias son mas costosas para el navegador
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Header />
//       <Home />
//       <Register />
//       <Footer />
//     </div>
//   );
// }

// en cambio las funciones de flecha son mas eficientes y mas modernas lo vimos tambien en clases con la profesora
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
};


export default App;
