import { useEffect , useState } from "react"
import ItemDetail from "./ItemDetail"
import db from './db.json'


const ItemDetailContainer = () => {
    const [details, setDetails] = useState([])

    
    useEffect(() => { setTimeout(() => { setDetails(db)}, 2000) }, [])

    if (details.length === 0) {
        return <p>Cargando detalles... </p>}

    return (
        <div className='Detail'>
            {details.map((e,i) => <ItemDetail key={e+i} detail={e.description} />)}
        
        </div>
    )
}

export default ItemDetailContainer