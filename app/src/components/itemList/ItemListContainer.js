import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { NavLink } from "react-router-dom"

function ItemListContainer(props){

    const [products, setProducts] = useState([])

    var url = `https://api-pickle.herokuapp.com/products`

    const obtenerData = async () => {
        const data = await fetch(url)
        const datajson = await data.json()
        console.log(datajson)
        setProducts(datajson)
     }

    useEffect(()=>{obtenerData()},)

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}


    return (
        <div className='ProductList'>
            {products.map((e,i)=> <NavLink to={'/producto/'+e.id} > <ItemList key={e+i} id={e.id} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img} /></NavLink>)}
        </div>
    )
}
export default ItemListContainer