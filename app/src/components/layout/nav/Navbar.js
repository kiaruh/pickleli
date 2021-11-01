import Navlink from './Navlink'
import Navlogo from './Navlogo'
import './navbar.css'

function Navbar(){


    return(
        <nav>
            <ul>    
                <li><Navlogo/></li>
                <li><Navlink tittle = 'Catalogo'/></li>
                <li><Navlink tittle = 'Favorito'/></li>
                <li><Navlink tittle = 'Detalle de producto'/></li>
                <li><a href="{#}"><span className="material-icons">shopping_cart</span></a></li>
                <li><Navlink tittle ='Bienvenido' /><a href="{#}"><span className="material-icons">account_circle</span></a></li>
            </ul>
        </nav>
    )
}
export default Navbar