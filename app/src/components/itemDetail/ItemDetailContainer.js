import { useEffect , useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
import './itemDetail.css'

const ItemDetailContainer = (props) => {
    
    const { id } = useParams()
    const [details, setDetails] = useState([])
    var url = `https://api-pickle.herokuapp.com/products/${id}`

    const obtenerData = async () => {
        const data = await fetch(url)
        const datajson = await data.json()
        console.log(datajson)
        setDetails(datajson)
     }
    
    useEffect(()=>{obtenerData()},)

    if (details.length === 0) {
        return <p>Cargando detalles... </p>}

    return (
        <div className='Detail'>
            <ItemDetail name={details.name} qty={details.qty} initialstock={details.initialstock} price={details.price} pic={details.img} detail={details.description} />
        </div>
    )
}

export default ItemDetailContainer