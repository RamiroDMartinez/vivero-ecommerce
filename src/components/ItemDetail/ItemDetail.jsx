import React from 'react'

const ItemDetail = ({producto}) => {
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
        </div>
    )
}

export default ItemDetail