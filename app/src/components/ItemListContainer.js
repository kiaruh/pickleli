import { useEffect , useState } from "react"
import ItemList from "./ItemList"
//import db from './db.json'
function ItemListContainer(props){

    const [products, setProducts] = useState([])

    //http://localhost:3001/products
    //https://api-pickle.herokuapp.com/products
    const obtenerData = async () => {
        const data = await fetch('https://api-pickle.herokuapp.com/products')
        const datajson = await data.json()
        console.log(datajson)
        setProducts(datajson)
     }
    // console.log(obtenerData)
    //setTimeout(() => { setProducts(obtenerData)}, 2000)
    //then (data => { setProducts(data)}) agregar return

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