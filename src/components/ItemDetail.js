import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'
import {CartContext} from '../context/cartContext'

function ItemDetail({ id, title, stock, description, price, pictureUrl }) {

    const [estado, setEstado] = useState(0)
    const [notif, setNotif] = useState(false)
    const {carro, addItem, removeItem, isInCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setNotif(true)
        setEstado(cantidad)
        addItem(id, title, cantidad, price, pictureUrl)
        if(cantidad === 1) {
            console.log("Se ha agregado " + cantidad + " producto al carrito." )
        } else {
            console.log("Se han agregado " + cantidad + " productos al carrito." )
        }
    }

    const eliminarProductoCarrito = () => {
        removeItem(id)
        setEstado(0)
    }
    console.log(id)

    return (
        <>  
            <div className="col-xs-12 col-sm-6 p-0">
                <img src={pictureUrl} className="img-fluid efecto animate__animated animate__fadeInLeft" alt={ description }/>
            </div>
            <div className="col-xs-12 col-sm-6 p-5">
                <h1>{ title }</h1>
                <h5>{ description }</h5>
                <h1 className="mt-5 text-center"><span className="text-danger"><b>${ price }.-</b></span><br/>pesos argentinos</h1>
                <div className="my-5 text-center">
                    <p className="text-muted text-center">Stock Disponible: { stock }</p>
                    
                    {
                        notif ?
                            estado > 0 ?
                                estado === 1  ?
                                    <p className="mt-3 text-center p-0">Se ha agregado { estado } al carrito.</p>
                                :
                                    <p className="mt-3 text-center p-0">Se han agregado { estado } al carrito.</p>
                            :
                                ''
                        :
                            ''
                    }
                    {
                        isInCart(id).length > 0 ?
                            <>
                                <NavLink to="/cart" className="nav-link text-center m-0" >
                                    <button className="btn btn-dark add" >Terminar Compra</button>
                                </NavLink>
                                <button className="btn btn-dark add mt-0" onClick={eliminarProductoCarrito}>Eliminar del Carro</button>
                            </>
                        :
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    } 
                    
                </div>
            </div>
        </>
    )
}

export default ItemDetail
