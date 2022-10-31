import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar Context
import MyContext from "./my-context";

// Importar Vistas
import Home from "./vistas/Home";
import Pizza from "./vistas/Pizza";
import Carrito from "./vistas/Carrito";

// Importar Componentes
import NavBar from "./componentes/NavBar";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [card, setCard] = useState(false);
  const globalState = {pizzas, setPizzas, card, setCard}

  return (
    <div className="App">
      < MyContext.Provider value={ globalState } >
        < BrowserRouter >
          < NavBar /> 
          < Routes >
            < Route path="/" element={ < Home /> } end />
            < Route path="/pizza/:id" element={ < Pizza /> } />
            < Route path="/carrito" element={ < Carrito /> } />
          </ Routes >
        </ BrowserRouter >
      </ MyContext.Provider >
    </div>
  );
}

export default App;
