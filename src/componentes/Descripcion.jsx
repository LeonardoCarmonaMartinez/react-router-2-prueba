import { useContext } from "react";
import MyContext from "../my-context";
import { useParams} from "react-router-dom";

const Descripcion = () => {
  const {pizzas} = useContext(MyContext);
  const {id} = useParams ();

  return (
    <div className="divCardDesc">
      {pizzas.filter(e => e.id === id)
      .map(pizza =>
      <div className="divDesc" key={pizza.id}>
        <div>
            <img src={pizza.img} alt="imagen de referencia" />
        </div>
        <div>
          <div>
            <h4>{pizza.name}</h4>
            <hr />
            <p>{pizza.desc}</p>
            <h4>Ingredientes:</h4>
            <ul>
              <li>🍕{pizza.ingredients[0]}</li>
              <li>🍕{pizza.ingredients[1]}</li>
              <li>🍕{pizza.ingredients[2]}</li>
              <li>🍕{pizza.ingredients[3]}</li>
            </ul>
          </div>
          <div className="divPrecio">
            <h4>Precio: ${pizza.price}</h4>
            <button className="buttonAñade">Añadir 🛒</button>
          </div>
        </div>
      </div>
      )}     
    </div>
  )
};

export default Descripcion;