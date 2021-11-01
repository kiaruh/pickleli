import { useEffect , useState } from "react"
import ItemList from "./itemList/ItemList"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"

function Category(props){

    const [products, setProducts] = useState([])
    const { id } = useParams()
    var url = `https://api-pickle.herokuapp.com/products?category=${id}`

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
            <h2>Categoria: {id}</h2>
            {products.map((e,i)=> <NavLink to={'/producto/'+e.id} > <ItemList key={e+i} id={e.id} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img} /></NavLink>)}
        </div>
    )
}
export default Category