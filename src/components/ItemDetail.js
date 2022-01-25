import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import {CartContext} from '../context/cartContext'

function ItemDetail({ id, title, stock, description, price, off, pictureUrl }) {

    const {addItem, isInCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(id, title, cantidad, price, pictureUrl, stock)
    }

    return (
        <div className="row">  
            <div className="col-xs-12 col-sm-6 p-0">
                <img src={`http://66.97.46.222/images/${pictureUrl}`} className="img-fluid animate__animated animate__fadeInLeft" alt={ description }/>
            </div>
            <div className="col-xs-12 col-sm-6 p-5 text-center mt-5">
                <h3>{ title }</h3>
                <h5>{ description }</h5>
                {
                    off == 0 || off == null || off == '' ?
                        <h4 className="card-text text-center mt-2"><b>${price}.-</b></h4>
                    :
                        <>
                            <h4 className="card-text text-center mt-2"> <span style={{textDecoration: "line-through"}}>${price}</span><b> ${off}.-</b></h4>
                        </>
                }
                <div className="my-5 text-center">
                    {/* {
                        isInCart(id).length > 0 ?
                            <p className="text-muted text-center">Stock Disponible: { stock - (isInCart(id)[0].quantity) }</p>
                        :
                            <p className="text-muted text-center">Stock Disponible: { stock }</p>
                    } */}

                    {
                       isInCart(id).length > 0 ?
                            <div>
                                <p className="text-danger"> Ya tienes { isInCart(id)[0].quantity } en el carrito</p>
                                {
                                (stock - (isInCart(id)[0].quantity)) === 0 ?
                                    ''
                                :
                                    <ItemCount initial={1} onAdd={onAdd} enCarro ={ true } />
                                }
                            </div>
                        :
                            <ItemCount stock={stock} initial={1} enCarro= { false } onAdd={onAdd} />
                    } 
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
