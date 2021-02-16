import React, { useState } from 'react'

function ItemCount({ stock, initial, onAdd, enCarro}) {

    const [cantidad, setCantidad] = useState(initial) 

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
            </div>
                {
                    stock > 0 ? 
                        <button className="btn btn-dark add" onClick = { cantidadAdd }>Agregar al Carrito</button>    
                    :
                        enCarro ?
                        ''
                        :
                        <button className="btn text-danger add">SIN STOCK</button>
                }
        </>
    )
}

export default ItemCount
