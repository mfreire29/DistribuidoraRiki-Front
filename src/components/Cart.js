import React, { useContext } from 'react'
import {CartContext} from '../context/cartContext'
import DetalleItem from './DetalleItem'
import { NavLink } from 'react-router-dom'


function Cart({ greeting }) {
    const style = {
        margin: "0.5em",
        paddingLeft: 0,
        listStyle: "none",
        color: "#a9a9a9",
    };

    const vaciarCarro = () => {
        clear()
    }
    
    const { totalCarro, carro, removeItem, unidadesCarro, clear } = useContext(CartContext)

    console.log(carro)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <p className="titulo-pagina" style={style}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-right-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                        
                        { greeting }
                        {
                            unidadesCarro > 0 ?
                                        <button onClick={ vaciarCarro } className="btn btn-danger">Vaciar</button>
                            :
                                ''
                        }
                        </p>

                        {
                            totalCarro !== 0 ?
                                <div className="container">
                                    <div className="row">
                                        {
                                            carro.map(a => {
                                                return <DetalleItem key={a.id} id={a.id} price={a.precio} quantity={a.quantity} pictureUrl= { a.pictureUrl } title= { a.title } removeItem= { removeItem } />
                                            })
                                        }

                                    
                                    <hr/>
                                    <h1 className="text-center">TOTAL: ${ totalCarro }.-
                                    <NavLink to="/checkout">
                                        <button className="btn btn-danger">Finalizar Compra</button>
                                    </NavLink>
                                    </h1>
                                    </div>
                                </div>
                                :
                                <div className="text-center">   
                                    <h1 className="text-center pt-3"> Tu carrito está vacío</h1>
                                    <h3 className="text-danger text-center">¿Qué esperás para llenarlo?</h3>
                                    <NavLink to="/">
                                        <button className="btn btn-danger mt-3">Quiero empezar a comprar 😄</button>
                                    </NavLink>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart