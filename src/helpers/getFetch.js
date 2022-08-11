
let productos = [
    {id: '1' ,categoria:'suculenta' ,name: "Suculentas" ,precio: 150 ,foto:'https://img2.freepng.es/20180226/upe/kisspng-succulent-plant-gardening-flower-plant-5a94784234e9d8.1816114915196795542167.jpg'},
    {id: '2' ,categoria:'planta de interior' ,name: "Palo de Agua" ,precio: 250 ,foto:'http://d3ugyf2ht6aenh.cloudfront.net/stores/641/202/products/palo-de-agua1-3feed01d88fca453da15405772965190-640-0.png'},
    {id: '3' ,categoria:'planta de exterior' ,name: "Hortensia" ,precio: 350 ,foto:'https://img2.freepng.es/20180705/hzz/kisspng-hydrangea-garden-roses-flowerpot-pink-hort-5b3e2fcde11635.589170711530802125922.jpg'},
    {id: '4' ,categoria:'Jardineria' ,name: "Jardineria" ,precio: 2500 ,foto:'https://thumbs.dreamstime.com/z/herramientas-de-jardiner%C3%ADa-sobre-el-suelo-fondo-verde-plana-vista-superior-170634657.jpg'},
]


export const getFetch = (id) => {
if (id) {
    return new Promise ((resolve, reject )=>{
        setTimeout(()=>{
                resolve(productos.find(producto => producto.id === id))
        },1000)
    })
}else {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
                resolve(productos)
            }, 1000)
        })
    }
}   

