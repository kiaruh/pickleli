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
            <button onClick={sumarContador}><span>+</span></button>
            <p>{cantidad}</p>
            <button onClick={restarContador}><span>-</span></button>
        </fieldset>
    )

    }

export default ItemCount