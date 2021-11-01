
import Item from "../item/Item"



function ItemList({name,qty,initialstock,price,pic}){


    return (
        <div className="Producto">
            <Item name={name} qty={qty} initialstock={initialstock} price={price} pic={pic}/>
        </div>

    )
}

export default ItemList