import { NavLink } from 'react-router-dom'
import React from "react"
import Navlogo from './Navlogo'
import './navbar.css'

function Navbar(){


    return(
        <nav>
            <NavLink to='/'><Navlogo/> </NavLink> 
            <NavLink to='/catalogo'>Catalogo</NavLink>
            <NavLink to='/categoria/entrada'>Entradas</NavLink>
            <NavLink to='/categoria/plato'>Platos</NavLink>
            <NavLink to='/categoria/postre'>Postres</NavLink>
            <NavLink to="/favorito">Favoritos</NavLink>
            <NavLink to="/cart"><span className="material-icons">shopping_cart</span></NavLink>
            <NavLink to="/user"><span className="material-icons">account_circle</span></NavLink>
        </nav>
    )
}
export default Navbar