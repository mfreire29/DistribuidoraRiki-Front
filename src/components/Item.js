import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/cartContext'



function Item({id, title, stock, description, price, pictureUrl}) {

    const { addItem, isInCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(id, title, cantidad, price, pictureUrl, stock)
    }   

    return (
        <>
                <div className="col-6 col-sm-6 col-md-3 my-3 pb-5 text-center">
                    <NavLink to={`/item/`+ id} >
                        <img src={pictureUrl} className="img-fluid efecto  animate__animated animate__fadeIn" alt={description}/>
                    </NavLink>
                    <h5 className="card-title text-center my-0 py-0 pt-3">
                        <NavLink to={`/item/`+ id} className="product-title" >
                            {title}
                        </NavLink>        
                    </h5>
                    <p className="card-text text-center my-0 py-0">{description}</p>
                    <h3 className="card-text text-center mt-2"><b>${price}.-</b></h3>
                    
                    {
                       isInCart(id).length > 0 ?
                            <div>
                                <p className="text-danger"> Ya tienes { isInCart(id)[0].quantity } en el carrito</p>
                                {
                                (stock - (isInCart(id)[0].quantity)) === 0 ?
                                    ''
                                :
                                    <ItemCount stock={stock - (isInCart(id)[0].quantity)} initial={1} onAdd={onAdd} enCarro ={ true } />
                                }
                            </div>
                        :
                            <ItemCount stock={stock} initial={1} enCarro= { false } onAdd={onAdd} />
                    }
                </div>
        </>
    )
}

export default Item
