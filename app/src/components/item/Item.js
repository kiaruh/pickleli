import ItemCount from '../itemCount/ItemCount';

function Item({name,qty,initialstock,price,pic}){

    return(
        <>
            <picture> <img src={pic} alt="" /></picture>
            <p>{name}</p>
            <p>${price}</p>
            <ItemCount stock={qty} inicial={initialstock} />
            <button>Agregar a carrito</button>
            <button>Mas del producto</button>
        </>

    )

}

export default Item