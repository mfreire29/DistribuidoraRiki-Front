import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import {CartContext} from '../context/cartContext'

function ItemDetail({ id, title, stock, description, price, pictureUrl }) {

    const {addItem, isInCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(id, title, cantidad, price, pictureUrl, stock)
    }

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
                    {
                        isInCart(id).length > 0 ?
                            <p className="text-muted text-center">Stock Disponible: { stock - (isInCart(id)[0].quantity) }</p>
                        :
                            <p className="text-muted text-center">Stock Disponible: { stock }</p>
                    }

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
            </div>
        </>
    )
}

export default ItemDetail
