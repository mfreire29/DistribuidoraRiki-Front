import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {CartContext} from '../context/cartContext'

function DetalleItem( { id, title, price, quantity, pictureUrl } ) {

  const { removeItem } = useContext(CartContext)

  const eliminarItem = () => {
    removeItem(id)
  }

    return (
          <div className="col-6 col-sm-3 col-md-2 my-3 text-center delete-padre">
            <button className="btn btn-dark btn-sm delete"onClick={ eliminarItem } >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
            </button> 
            <NavLink to={`/item/`+ id} >
                <img src={`http://localhost:8000/images/${pictureUrl}`} className="img-fluid animate__animated animate__fadeIn" alt={title}/>
            </NavLink>
            <h5 className="card-title text-center my-0 py-0 pt-2">
                <NavLink to={`/item/`+ id} className="product-title" >
                    {title}
                </NavLink>     
            </h5>
            <h5 className="text-center mt-1">{ quantity } x <b>${price}.-</b></h5>
            <h5 className="text-center text-black mt-1"><span className="text-muted">Total:</span> <b>${ quantity*price }.-</b></h5>
          </div>
    )
}

export default DetalleItem 
