import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItenListContainer = ({saludo}) => {
const onAdd = (cant) => {
    console.log(`La cantidad es: ${cant}`)
}    
return (
    <div>{saludo}
    <ItemCount initial={1} stock={10} onAdd={onAdd}  />
    </div>
)
}

export default ItenListContainer