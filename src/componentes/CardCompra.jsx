import { useContext, useState } from "react";
import MyContext from "../my-context";

const CardCompra = () => {
  const { pizzas, card } = useContext(MyContext);
  const [ cantidad, setCantidad ] = useState(0);
  
  const aumenta= () => {
    setCantidad(cantidad + 1)
  }

  const disminuye = () => {
    setCantidad(cantidad - 1)
  }
  
  if(card === true) {
  return (
    <ul>
      {pizzas.map(pizza =>
        <li key={pizza.id} className="liCantidad">
          <img src={pizza.img} alt="" />
          <p>{pizza.name}</p>        
          <p>$</p>
          <button className="buttonDis" onClick={disminuye}>-</button>
          <p>{cantidad}</p>
          <button className="buttonAum" onClick={aumenta}>+</button>      
        </li>
        )
      }       
    </ul>
  )}
  else {console.log("Elige una pizza")}
};

export default CardCompra;