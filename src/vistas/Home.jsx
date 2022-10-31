import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../my-context";

const Home = () => {
  const { pizzas, setPizzas, setCard } = useContext(MyContext);
    
  // Consumo json
  useEffect(()=> {
    consultaPizzas()
  });

  const consumoPizzas = "/pizzas.json";

  const consultaPizzas = async () => {
    const response = await fetch (consumoPizzas)
    const infoPizzas = await response.json()
    setPizzas(infoPizzas)
  };

  // Navegación
  const navigate = useNavigate();

  const Añadir= () => {
    const value = true;
    setCard(value)
  };

  return (
    <div>
      <section className="sectionHeader">
        <h1>¡Pizzería Mamma Mia!</h1>
        <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6> 
      </section>
      <div className="divBody">
        {pizzas.map(pizza => 
        <div className="divCard" key={pizza.id}>
          <img src={pizza.img} alt="imagen de referencia" />
          <h3 style={{marginTop:"0.5em"}}>{pizza.name}</h3>
          <hr />
          <h4 style={{marginTop:"0.5em"}}>Ingredientes:</h4>
          <ul style={{marginTop:"0.5em"}}>                  
            <li>🍕{pizza.ingredients[0]}</li>
            <li>🍕{pizza.ingredients[1]}</li>
            <li>🍕{pizza.ingredients[2]}</li>
            <li>🍕{pizza.ingredients[3]}</li>           
          </ul>
          <hr />
          <h4 style={{marginTop:"0.5em"}}>Precio: ${pizza.price}</h4>
          <div className="divButton"> 
            <button className="buttonVer" onClick={() => navigate (`/pizza/${pizza.id}`)}> Ver más 👀 </button>
            <button className="buttonAñade" onClick={Añadir}> Añadir 🛒 </button>
          </div>          
        </div>
        )}
             
      </div>
    </div>
  )
};

export default Home;