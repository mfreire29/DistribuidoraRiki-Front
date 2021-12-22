import React, { useState } from 'react'

function ItemCount({ stock, initial, onAdd, enCarro}) {

    const [cantidad, setCantidad] = useState(initial) 

    const aumentarCantidad = () => {
        
            setCantidad(cantidad+1)
        
    }
    
    const reducirCantidad = () => {
        if(cantidad > initial) {
            setCantidad(cantidad-1)
        }
    }

    const cantidadAdd = () => {
        onAdd(cantidad)
        setCantidad(1)
    }

    return (
        <>

            <div className="item-count mx-auto">
                <button className="btn btn-dark left" onClick = { reducirCantidad }>-</button>  
                <span>{cantidad}</span>
                <button className="btn btn-dark right" onClick = { aumentarCantidad }>+</button>
            </div>
                        <button className="btn btn-dark add" onClick = { cantidadAdd }>Agregar al Carrito</button>    
                    
        </>
    )
}

export default ItemCount
