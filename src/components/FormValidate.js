import React from 'react'
import { NavLink } from 'react-router-dom'

function FormValidate({ comprobarEmail, email, setEmail, loader, setEmailValidate, emailValidate, msj }) {
    return (
        <>
            <form onSubmit={ comprobarEmail }>
                <div className="form-group mb-3">
                    <p className='text-danger'>
                        Antes de avanzar con el pedido, debemos comprobar si sos cliente, ingresá tu mail a continuación.
                    </p>
                </div>
                <div className="form-group pt-3 pb-2">
                    <input onChange={ e => setEmail(e.target.value)} className="form-control" type="email" placeholder="E-mail" value={ email }/>
                    <p className='pt-3 text-center' style={{color: 'red'}}>{ msj }</p>
                </div>
                <center>
                        { loader ? 
                            <div className="text-center my-3">
                                <p className="animate__animated animate__backInLeft">Estamos comprobando tu email... &#128540;</p>
                                <div className="spinner-border" role="status">
                                </div>
                            </div> 
                        :
                            ''
                        }
                    <NavLink to="/cart">
                        <button className="btn btn-danger m-1">Carrito</button>
                    </NavLink>
                    <button className="btn btn-danger m-1 finalizar-compra">Comprobar Email</button>
                </center>
            </form>   
        </>
    )
}

export default FormValidate
