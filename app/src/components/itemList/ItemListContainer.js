import { useEffect , useState } from "react"
import ItemList from "./ItemList"

function ItemListContainer(props){

    const [products, setProducts] = useState([])

    const obtenerData = async () => {
        const data = await fetch('https://api-pickle.herokuapp.com/products')
        const datajson = await data.json()
        console.log(datajson)
        setProducts(datajson)
     }

    useEffect(()=>{obtenerData()},[])

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}


    return (
        <div className='ProductList'>
            {products.map((e,i)=> <ItemList key={e+i} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img}  />)}
        </div>
    )
}
export default ItemListContainer