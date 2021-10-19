import Navlink from './Navlink'
import Navlogo from './Navlogo'
import '../assets/css/navbar.css'

function Navbar(){


    return(
        <nav>
            <Navlogo/>
            <ul>
                <li><Navlink tittle = 'Inicio'/></li>
                <li><Navlink tittle = 'Favorito'/></li>
                <li><a href="#"><span className="material-icons">shopping_cart</span></a></li>
                <li><Navlink tittle ='Bienvenido' /><a href="#"><span className="material-icons">account_circle</span></a></li>
            </ul>
        </nav>
    )
}
export default Navbar