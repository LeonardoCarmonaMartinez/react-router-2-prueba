import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="divNav">
        <NavLink className="navlinkHome" to="/">🍕Pizzería Mamma Mia!</NavLink>
        <NavLink className="navlinkCarrito" to="/carrito">🛒$</NavLink>
    </div>
  )
};

export default NavBar;