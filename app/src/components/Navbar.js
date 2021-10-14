import Navlink from './Navlink'
import Navlogo from './Navlogo'

function Nav(){


    return(
        <nav>
            <ul>
                <li><Navlogo/></li>
                <li><Navlink tittle = 'Inicio'/></li>
                <li><Navlink tittle = 'Favorito'/></li>
                <li><Navlink tittle = 'Registrar'/></li>
                <li><Navlink tittle = 'Contacto'/></li>
            </ul>
        </nav>
    )
}
export default Nav