import React from "react"
import ItemCount from "../itemCount/ItemCount"
import { Button } from '@mui/material'

const ItemDetail = ({name,qty,initialstock,price,pic,detail}) => {
    return (
        <>
            <picture> <img style={{width:'400px', height:'500px'}} src={pic} alt="" /></picture>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <ItemCount stock={qty} inicial={initialstock} />
            <Button>Agregar a carrito</Button>
            <Button>Mas del producto</Button>
            <p>{detail}</p>
        </>
    )
}

export default ItemDetail