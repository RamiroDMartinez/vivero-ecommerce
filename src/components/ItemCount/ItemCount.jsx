import { useState } from 'react'

const ItemCount = ({ initial=1, stock=10, onAdd }) => {
    const [count, setCount] = useState(initial)
    
    const handleAdd = () => {
    if (count < stock){ 
    setCount(count + 1) 
    }
}

    const handleRestar = () => {
    if (count >1) {
    setCount(count - 1) }
    }


const handleAddToCart = () => {
    onAdd(count)    
}    
return (
    <div className='card w-25'>
        <label>{ count }</label>
        <br />
        <button className='btn btn-outLine-primary ' onClick={handleAdd }> + </button>
        <button className='btn btn-outLine-primary 'onClick={handleRestar }> - </button>
        <button className='btn btn-outLine-success' onClick={handleAddToCart}> Agregar Carrito</button>
    </div>
)
}

export default ItemCount