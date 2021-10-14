import Navlink from './Navlink'
import Navlogo from './Navlogo'
import '../assets/css/navbar.css'

function Nav(){


    return(
        <nav>
            <Navlogo/>
            <ul>
                <li><Navlink tittle = 'Inicio'/></li>
                <li><Navlink tittle = 'Favorito'/></li>
                <li><Navlink tittle = 'Registrar'/></li>
                <li><Navlink tittle = 'Contacto'/></li>
            </ul>
        </nav>
    )
}
export default Nav