import {useState} from 'react'

function ItemCount({stock,inicial}) {

    const [cantidad, setCantidad] = useState(inicial)

    const sumarContador = () => {
        if(cantidad < stock){
        return setCantidad(cantidad +1)
        }else{
           return setCantidad(stock)
       }
    }
    const restarContador = () => {
       if(cantidad>1){
        return setCantidad(cantidad -1)
       }else{
           return setCantidad(inicial)
       }
    }

    return(
        <fieldset>
            <button className='material-icons' onClick={sumarContador}>add</button>
            <p>{cantidad}</p>
            <button className='material-icons' onClick={restarContador}>remove</button>
            <p>stock disponible: {stock}</p>
        </fieldset>
    )

    }

export default ItemCount