import React from "react"
import { useCartContext } from "../contex/CartContex"

const Cart = ( ) => {
    
        <div>Carrito</div>
const { cartList, vaciarCarrito, eliminarProducto, precioTotal} = useCartContext()

return (
        <div className="row">
            <h1>Carrito</h1>
            <div className="col-8">
            <div className="w-100">
                {cartList.map(item => (

                    <div key = {item.id}>
                        <img src={item.foto}alt="foto de producto" style={{ width:100}} />
                        nombre: {item.name} - cantidad: {item.cantidad} - precio: {item.precio} - Subtotal: {item.cantidad * item.precio}
                        <button onClick={() => eliminarProducto(item.id)}>eiliminar</button>
                    </div>
            ))}
            </div>
            <div>
                <h5> {precioTotal() !== 0 && `Precio Total: ${precioTotal ()}`}</h5>
                <button onClick={vaciarCarrito}> Vaciar Carrito</button>
            </div>
            </div>
        </div>


)
}

export default Cart

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    