import { useState, useEffect } from 'react'
import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

const ComponenteContainer = ({ saludar }) => {
    const [ count, actualizarCount ] = useState(0)
    const [bool, setBool] = useState(false)
    const [ titulo, ] = useState('Hola')
    

    function saludarFunction() {
        
    }
    
    function handleClick() {
        
        actualizarCount(count + 1) 
    }
    function handleBool() {
        
        setBool(!bool) 
    
    }

    useEffect(()=>{ 
        console.log(' addeventListner')
        return ()=>{
        console.log('removeeventListner')
        }
    }) 

    useEffect(()=>{ 
        
        
    }, [] ) 
    
    
    useEffect(()=>{ 
        setBool ()
    }, [ bool ] ) 
    
    

    return (
        <>
            
            {<Titulo titulo={titulo} subTitulo='subtitulo de app' />}
            {'cantidad Clicks: ' + count}
            
            <br />
            <button onClick={handleClick}> + </button>
            <br />
            <button onClick={handleBool}> Bool </button>

            {<Formulario saludarFunction={ saludarFunction} />}
            { {saludar} }
            
        </>
    )
}

export default ComponenteContainer
