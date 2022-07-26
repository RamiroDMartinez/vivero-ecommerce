
let productos = [
    {id: '1' ,categoria:'suculenta' ,name: "Cactus" ,precio: 150 ,foto:''},
    {id: '2' ,categoria:'planta de interior' ,name: "Palo de Agua" ,precio: 250 ,foto:''},
    {id: '3' ,categoria:'planta de exterior' ,name: "planta de exterior" ,precio: 350 ,foto:''},
    {id: '4' ,categoria:'Jardineria' ,name: "Jardineria" ,precio: 2500 ,foto:''},

]


export const getFetch = (id) => {

    return new Promise ((resolve, reject )=>{
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(producto => producto.id === id))
            }else {
                resolve(productos)
            }
        }, 3000)
    })   

}    