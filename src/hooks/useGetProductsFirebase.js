import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useGetProductsFirestore = () => {

    const [ loading, setLoading ] = useState(true)
    const [ products, setProducts ] = useState([])  
    const { categoriaId } = useParams()   
    
    useEffect(()=>{          
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = categoriaId ?  query(queryCollection, where('categoria', '==', categoriaId)) : queryCollection 

        getDocs(queryCollectionFilter)
        .then(resp =>  setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))  
    }, [categoriaId])


    

    return [products, loading]

}
