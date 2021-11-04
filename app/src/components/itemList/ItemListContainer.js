import React, { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { NavLink } from "react-router-dom"

function ItemListContainer(props){

    const [products, setProducts] = useState([])
     //`http://localhost:3001/products`
    //`https://api-pickle.herokuapp.com/products`

    useEffect(()=>{
        const obtenerData = async () => {
            const data = await fetch(`http://localhost:3001/products`)
            const datajson = await data.json()
            setProducts(datajson)
         };
        obtenerData()},[])

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}


    return (
        <div className='ProductList'>
            {products.map((e,i)=> <NavLink key={e+i} to={'/producto/'+e.id} > <ItemList id={e.id} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img} /></NavLink>)}
        </div>
    )
}
export default ItemListContainer