import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/cartContext'



function Item({id, title, description, price, off, pictureUrl}) {

    const { addItem, isInCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        off == 0 || off == null || off == '' ?
            addItem(id, title, cantidad, price, pictureUrl)
            :
            addItem(id, title, cantidad, off, pictureUrl)
    }   

    return (
        <>
                <div className="col-xs-12 col-sm-6 col-md-3 p-1 mb-3 pb-3 text-center">
                    <div className='shadow m-3 p-1 py-3 border contenedor-oferta'>
                    {
                        off == 0 || off == null || off == '' ?
                        ''
                    :
                        <div className='oferta shadow'>OFERTA</div>
                    }
                    
                    <NavLink to={`/item/`+ id} >
                        <img src={`http://66.97.46.222/images/${pictureUrl}`} className="img-fluid img-item p-2 animate__animated animate__fadeIn" style={{objectFit: "cover"}} alt={description}/>
                    </NavLink>
                    <h5 className="card-title text-center my-0 py-0 pt-1">
                        <NavLink to={`/item/`+ id} className="product-title" >
                            {
                                title.length > 30 ?
                                    <>{title.substring(0, 30)}...</>
                                :
                                    title
                            }
                        </NavLink>        
                    </h5>
                    {
                        off == 0 || off == null || off == '' ?
                            <h3 className="card-text text-center mt-2 product-price"><b>${price}.-</b></h3>
                        :
                            <>
                            <h3 className="card-text text-center mt-2 product-price"> <span style={{textDecoration: "line-through"}}>${price}</span><b> ${off}.-</b></h3>
                            </>
                    }
                    
                    {
                       isInCart(id).length > 0 ?
                            <div>
                                {
                                    (isInCart(id)[0].quantity) === 0 ?
                                    ''
                                    :
                                    <ItemCount initial={1} onAdd={onAdd} enCarro ={ true } />
                                }
                                <p className="text-dark pt-2 text-xs"> Tienes { isInCart(id)[0].quantity } en el carrito</p>
                            </div>
                        :
                            <ItemCount initial={1} enCarro= { false } onAdd={onAdd} />
                    }
                    </div>
                </div>
        </>
    )
}

export default Item
