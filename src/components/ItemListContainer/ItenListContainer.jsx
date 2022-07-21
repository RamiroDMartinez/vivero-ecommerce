import { useState } from "react"
import { useEffect } from "react"
import { getFetch } from "../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"



const ItenListContainer = ({saludo}) => {
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading] = useState(true)


    useEffect(()=>{
        getFetch()
        .then(respuesta => setProductos(respuesta))
        .catch( err => console.log (err)) 
        .finally(()=> setLoading(false))      
},  [])

const onAdd = (cant) => {
    console.log(`La cantidad es: ${cant}`)
}  


return (
    <div>
        {saludo}
        
        {loading ?
        <h1> Cargando ...</h1>
        :
            productos?.map(  prod => <div            
                className='col-md-4 p-1'                                                           
            >                    
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt='' className='w-50' />
                        {prod.stock}                                                            
                    </div>
                    <div className="card-footer"> 
                            <button className="btn btn-outline-primary btn-block">
                                detalle del producto
                            </button> 
                    </div>
                </div>                                                                                                                            
            </div>                        
) 
}

    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
    )
}

export default ItenListContainer