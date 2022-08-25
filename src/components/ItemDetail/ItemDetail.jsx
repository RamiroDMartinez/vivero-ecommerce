import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../contex/CartContex'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
const [isCount, setIsCount] = useState(true)  
const {agregarCarrito} = useCartContext()

const onAdd = (cant) => {
    agregarCarrito ( {...producto, cantidad: cant})
    setIsCount(false)

}

    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <img src={producto.foto} alt="Foto del Producto" />
                    </div>
                <div className="col">
                <h3>{producto.name}</h3>
                <p>Categoria: {producto.categoria}</p>
                <p>Precio: {producto.precio}</p>
            </div>
        </div>
    </div>
            <div className="col">
            {isCount ?
            <ItemCount  initial={1} stock={10} onAdd={onAdd} />
                    :
            <>
            <Link to='/cart'><button className="btn btn-outline-success">Terminar Compra</button></Link>
            <Link to='/'><button className="btn btn-outline-primary"> Seguir Compra</button></Link>
            </>
            
            }
            </div>
        </div>
    )

}

export default ItemDetail

