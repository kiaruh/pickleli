import ItemCount from "../itemCount/ItemCount"

const ItemDetail = ({name,qty,initialstock,price,pic,detail}) => {
    return (
        <div>
            <picture> <img src={pic} alt="" /></picture>
            <p>{name}</p>
            <p>${price}</p>
            <ItemCount stock={qty} inicial={initialstock} />
            <button>Agregar a carrito</button>
            <button>Mas del producto</button>
            <p>{detail}</p>
        </div>
    )
}

export default ItemDetail