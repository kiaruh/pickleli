import { useEffect , useState } from "react"
import db from "./db.json"
import ItemList from "./ItemList"
   

export default function Main(props){

    const [products, setProducts] = useState([])

    useEffect(() => { setTimeout(() => {setProducts(db)}, 2000)},[])

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}
    
    console.log(products)
    return(
        <main>
            {products.map((e,i)=> <ItemList key={e+i} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img}  />)}
        </main>
    )
    }