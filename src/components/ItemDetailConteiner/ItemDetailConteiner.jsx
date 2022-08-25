import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail' 
import Loading from '../Loading/Loading'



const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})  
const {detalleId} = useParams()    



useEffect (() => {
    getFetch (detalleId)
    .then(resp => setProducto(resp))
    }, [detalleId])
    


return (
    <div>
            { producto.id ?
            
            <ItemDetail producto={producto} />
            :
            <Loading />
            
            }
        
    </div>
)
}


export default ItemDetailContainer 