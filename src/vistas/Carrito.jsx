import CardCompra from "../componentes/CardCompra";

const Carrito = () => {
 
  return (
    <div className="divCarrito">
      <p>Detalles del pedido:</p>
      <div className="divCompra">
        < CardCompra />
        <hr />      
        <h4>Total: $</h4>
        <button className="buttonPay">Ir a pagar</button>
      </div>      
    </div>
  )
};

export default Carrito;