import React, {useState} from "react"
import ItemCount from "../itemCount/ItemCount"
import { Card } from '@mui/material'

const ItemDetail = ({name,qty,initialstock,price,pic,detail}) => {
    const [count, setCount] = useState(0)

    return (
        <>
            <picture> <img style={{width:'400px', height:'500px'}} src={pic} alt="" /></picture>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <ItemCount stock={qty} inicial={initialstock} onAdd={count => setCount(count)} />
            <Card>{detail}</Card>
            <Card>Catidad seleccionado: {count}</Card>
        </>
    )
}

export default ItemDetail