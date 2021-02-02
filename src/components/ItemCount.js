import React, { useState } from 'react'

function ItemCount({ stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(initial) 

    //const [carrito, setCarrito] = useState(0)

    // Use effect me sirve para generar efecto secundario en pantalla, lleva dos parametros A y B
    // A es una funcion y b es un array
    // A es el efecto secundario, lo que debe hacer el componente, se ejecutan cada vez q el componente renderiza
    /*
    useEffect(() => {
        if(cantidad === stock) {
            console.log('stock maximo')
        }
        
        const pedido = fetch('https://jsonplaceholder.typicode.com/users')

        pedido
        .then((respuesta)=>{
            console.log(respuesta)
            if(respuesta.status === 200){
                console.log('Estuvo todo bien')
                const prometo_transformacion = respuesta.json()
                return prometo_transformacion
            } else {
                console.log('Errorrrr')
                throw new Error("hubo un error". respuesta.status)
            }
        })
        .then((respuesta)=>{
            console.log(respuesta)
        })
        .catch(()=>{
            console.log('Errorrrr')
        })
        
    },[cantidad])
    */
    
    const aumentarCantidad = () => {
        if(stock > 0 && cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }
    
    const reducirCantidad = () => {
        if(cantidad > initial) {
            setCantidad(cantidad-1)
        }
    }

    const cantidadAdd = () => {
        setCantidad(cantidad)
        onAdd(cantidad)
    }

    return (
        <>

            <div className="item-count mx-auto">
                <button className="btn btn-dark left" onClick = { reducirCantidad }>-</button>  
                <span>{stock > 0 ? cantidad : 0}</span>
                <button className="btn btn-dark right" onClick = { aumentarCantidad }>+</button>
                {
                    stock > 0 ? 
                        <button className="btn btn-dark add" onClick = { cantidadAdd }>Agregar al Carrito</button>    
                    :
                        <button className="btn text-danger add">SIN STOCK</button>
                }
            </div>
        </>
    )
}

export default ItemCount
