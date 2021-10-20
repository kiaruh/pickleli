import ItemCount from "./ItemCount"


function Product({name,qty,initialstock,pic}){


    return (
        <div className="Producto">
            <picture> <img src={pic} alt="" /></picture>
            <p>{name}</p>
            <ItemCount stock={qty} inicial={initialstock} />
            <button>Agregar a carrito</button>
        </div>

    )
}

export default Product