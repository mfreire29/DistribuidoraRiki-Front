import React, { useContext } from 'react'
import { NavLink, Navlink } from 'react-router-dom'
import {CartContext} from '../context/cartContext'

function DetalleItem( { id, title, price, quantity, pictureUrl } ) {

  const { removeItem } = useContext(CartContext)

  const eliminarItem = () => {
    removeItem(id)
  }

    return (
          <div className="col-6 col-sm-3 col-md-2 my-5 pb-5 text-center delete-padre">
            <button className="btn btn-dark btn-sm delete"onClick={ eliminarItem } >
              <span aria-hidden="true">X</span>  
            </button> 
            <NavLink to={`/item/`+ id} >
                <img src={pictureUrl} className="img-fluid efecto  animate__animated animate__fadeIn"/>
            </NavLink>
            <h5 className="card-title text-center my-0 py-0 pt-3">
                <NavLink to={`/item/`+ id} className="product-title" >
                    {title}
                </NavLink>     
            </h5>
            <h5 className="text-center mt-2"><b>${price}.-</b></h5>
            <p className="text-center mt-2">Cantidad: <b>{ quantity }</b></p> 
            <h3 className="text-center text-danger mt-2"><span className="text-muted">Total:</span> <b>${ quantity*price }.-</b></h3>
          </div>
    )
}

export default DetalleItem 
