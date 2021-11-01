import { NavLink } from 'react-router-dom'
import Navlogo from './Navlogo'
import './navbar.css'

function Navbar(){


    return(
        <nav>
            <Navlogo/>
            <NavLink to='/catalogo'>Catalogo</NavLink>
            <NavLink to="/favorito">Favorito</NavLink>
            <NavLink to="/producto/:id">Detalle de producto</NavLink>
            <NavLink to="/cart"><span className="material-icons">shopping_cart</span></NavLink>
            <NavLink to="/user"><span className="material-icons">account_circle</span></NavLink>
        </nav>
    )
}
export default Navbar