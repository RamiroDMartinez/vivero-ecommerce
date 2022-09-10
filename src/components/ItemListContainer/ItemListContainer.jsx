import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"


const ItemListContainer = ({saludo}) => {
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
    if (categoriaId) {
        getFetch()
        .then(respuesta => setProductos(respuesta.filter(prod => prod.categoria === categoriaId)))
        .catch( err => console.log (err)) 
        .finally(()=> setLoading(false))
    } else {
        getFetch()
        .then(respuesta => setProductos(respuesta))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }    

}, [categoriaId])

const onAdd = (cant) => {
    console.log(`La cantidad es: ${cant}`)
}  

return (
    <div>
        {saludo}
        
        {loading ?
        <Loading />
        :
        <ItemList productos={productos} />
        }
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
    
)
}   

export default ItemListContainer