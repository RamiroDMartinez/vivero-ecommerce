import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
const [toCart, setToCart] = useState(true)   
const onAdd = (cant) => {
    alert(`La cantidad es : ${cant}`)
    setToCart(false)

}

    return (
        <div className="row">
            <div className="col">
                <img src={producto.foto} alt="Foto del Producto" />
            </div>
            <div className="col">
                <h3>{producto.name}</h3>
                <p>Categoria: {producto.categoria}</p>
                <p>Precio:{producto.precio}</p>
            </div>
            {toCart ?
            <ItemCount  initial={1} stock={10} onAdd={onAdd} />
            :
            <Link to="/cart"><button>Ir Al Carrito</button></Link>
            }
            </div>
    )
}

export default ItemDetail

