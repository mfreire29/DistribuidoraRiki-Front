import React, { useContext, useState } from 'react'
import {CartContext} from '../context/cartContext'
import { NavLink } from 'react-router-dom'
import DetalleItemCheckout from './DetalleItemCheckout'
import FormChekout from './FormCheckout'


function Checkout({ greeting }) {

    const style = {
        margin: "0.5em",
        paddingLeft: 0,
        listStyle: "none",
        color: "#a9a9a9",
    };

    const { totalCarro, carro } = useContext(CartContext)
    const [ idOrden, setIdOrden ] = useState(null)
    const [nombreComprador, setNombreComprador ] = useState('')

    console.log('esta es el id de la orden: ', idOrden)

    return (
        <>
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
                        </p>
                        
                                { idOrden === null ? 
                                    totalCarro !== 0 ?
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            carro.map(a => {
                                                                return <DetalleItemCheckout key={a.id} id={a.id} price={a.precio} quantity={a.quantity} pictureUrl= { a.pictureUrl } title= { a.title }/>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6">
                                                <h1 className="text-center">El importe a abonar es: ${ totalCarro }.-</h1>
                                                <FormChekout setIdOrden={ setIdOrden } setNombreComprador= { setNombreComprador } />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="container">
                                        <div className="row">
                                            <div className="text-center">   
                                                <h1 className="text-center pt-3"> Tu carrito está vacío</h1>
                                                <h3 className="text-danger text-center">¿Qué esperás para llenarlo?</h3>
                                                <NavLink to="/">
                                                    <button className="btn btn-danger mt-3">Quiero empezar a comprar 😄</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>

                                :
                                    <div className="container">
                                        <div className="row">
                                            <div className="animate__animated animate__backInLeft">
                                                <h1 className="text-center text-success pt-3">¡Gracias por tu compra { nombreComprador }!</h1>
                                                <h3 className="text-center text-muted pb-3">Nos vemos pronto &#128521;</h3>
                                                <h1 className="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                                </svg>
                                                </h1>
                                                <p className="p-0 m-0 mt-4 text-center">Identificador de tu pedido:</p>
                                                <p className="p-0 m-0 text-center"><b>{ idOrden }</b></p>
                                                <center>
                                                    <NavLink to="/">
                                                        <button className="btn btn-dark add">Volver al Inicio</button>
                                                    </NavLink>
                                                </center>                                        
                                            </div>
                                        </div>
                                    </div>
                                }                        
                    </div>
                </div>
            </div>
        </div>   
        </>
    )
}

export default Checkout
