
let productos = [
    {id: '1' ,categoria:'suculenta' ,name: "Cactus" ,precio: 150 ,foto:'imagenes:suculentas.jpg'},
    {id: '2' ,categoria:'planta de interior' ,name: "Palo de Agua" ,precio: 250 ,foto:'imagenes: palo de agua.webp'},
    {id: '3' ,categoria:'planta de exterior' ,name: "planta de exterior" ,precio: 350 ,foto:'imagenes: planta de exterior'},
    {id: '4' ,categoria:'herramientas' ,name: "herramientas" ,precio: 2500 ,foto:'imagemes:herramientas'},

];


export const getFetch = (id) => {
    if (id) {
        return new Promise ((resolve, rejet ) => {
            setTimeout(()=>{
                resolve(productos.find(producto => producto.id === id))
            }, 3000)
        })
    }else {
        return new Promise ((resolve, reject ) =>{
            setTimeout(()=>{
                resolve (productos)
            }, 3000)
        })
    }
}