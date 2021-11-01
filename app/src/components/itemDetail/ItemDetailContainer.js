import { useEffect , useState } from "react"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () => {
    const [details, setDetails] = useState([])

    const obtenerData = async () => {
        const data = await fetch('https://api-pickle.herokuapp.com/products')
        const datajson = await data.json()
        console.log(datajson)
        setDetails(datajson)
     }
    
     useEffect(()=>{obtenerData()},[])

    if (details.length === 0) {
        return <p>Cargando detalles... </p>}

    return (
        <div className='Detail'>
            {details.map((e,i) => <ItemDetail key={e+i} detail={e.description} />)}
        
        </div>
    )
}

export default ItemDetailContainer