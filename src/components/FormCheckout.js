import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/cartContext'
import FormValidate from './FormValidate'
import clienteAxios from './AxiosConfig'
import { NavLink } from 'react-router-dom'


function FormCheckout({ setIdOrden, setNombreComprador }) {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [comentarios, setComentarios] = useState('')
    const [cliente, setCliente] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [emailValidate, setEmailValidate] = useState(false)
    const [ msj, setMsj ] = useState('')
    const [ active, setActive ] = useState(false)

    const { totalCarro, setCarro, carro, carroFinal, setCarroFinal, setUnidadesCarro, setTotalCarro, notify, clear } = useContext(CartContext)

    useEffect(() => {
        console.log(carro)
        if(emailValidate){
            if(cliente.active === 1){
                setActive(true)
            }
        }
    }, [emailValidate])

    const comprobarEmail = e => {
        e.preventDefault();
        if (email === '') { notify('Debes completar tu E-mail'); return }

        setLoader(true)

        clienteAxios.post('/check', {
            email
        })
            .then(function (response) {
                console.log(response.data.length);
                setCliente(response.data[0]);
                if(response.data.length === 1){
                    setEmailValidate(true)                 
                } else {
                    setMsj('Lo sentimos pero tu correo no se encuentra asociado a un cliente.')
                }
                setLoader(false)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const finalizarCompra = e => {

        e.preventDefault()

        setError(false)
        setLoader(true)

        setNombreComprador(nombre)

        clienteAxios.post('/pedidos', {
            cliente_id: cliente.id,
            subtotal: totalCarro,
            descuento: '0',
            total: totalCarro,
            items: carro,
            comentarios: comentarios,
            email: email
        })
            .then(function (response) {
                if(response.data.valid !== false){
                    setTimeout(() => {
                        console.log(response);
                        setLoader(false)
                        setIdOrden(true)
                        clear()
                    }, 3000);                
                } else {
                    setLoader(false)
                    setError(true)
                    console.log('entro en error')
                }
                    
            })
            .catch(function (error) {
                setLoader(false)
                setError(true)
                console.log(error);
            });
    }

    return (
        <div className="my-3">
            {
                !emailValidate ?
                    <>
                        <div className="alert alert-danger" role="alert">
                            :: RECORDÁ QUE SI NO ESTÁS REGISTRADO NO PODRÁS AVANZAR<br />
                            <p className='pt-3 text-muted'>
                                Si querés realizar un pedido y aún no sos cliente, contactate con nosotros al siguiente teléfono 1167166393 o escribinos por Whatsapp
                                haciendo click aquí.
                            </p>
                        </div>
                        <FormValidate comprobarEmail={comprobarEmail} setEmail={setEmail} msj={msj} email={email} loader={loader} emailValidate={emailValidate} setEmailValidate={setEmailValidate} />                        
                    </>
                    :
                    <form onSubmit={finalizarCompra}>
                        <h3 className='center pt-3'>¡Hola {cliente.name}! 👋🏼</h3>
                        {
                            active ?
                                <p className='text-muted'>Ya estamos listos para que finalices tu pedido.</p>
                            :
                            <p style={{color: 'red'}}>Lo sentimos, pero tu pedido no puede ser procesado, ponte en contacto con nosotros.</p>
                        }
                        {
                            active ?
                                <>
                                    <div className="form-group mb-3 pt-4">
                                        <input className="form-control" type="text" placeholder="Nombre" value={`${cliente.name} ${cliente.last_name}`} readOnly/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input onChange={e => setEmail(e.target.value)} className="form-control" type="text" placeholder="Email" value={email} readOnly/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea maxlength="1000" onChange={e => setComentarios(e.target.value)} className="form-control" placeholder='¿Desea dejar algún comentario o consulta?'>
                                            
                                        </textarea>
                                    </div>
                                </>
                            :
                                ''
                        }
                        <center>
                            {loader ?
                                <div className="text-center my-3">
                                    <p className="animate__animated animate__backInLeft">Estamos finalizando tu pedido &#128540;</p>
                                    <div className="spinner-border" role="status">
                                    </div>
                                </div>
                                :
                                ''
                            }
                            {
                                error ?
                                    <p style={{color: 'red'}}>Lo sentimos, pero tu pedido no puede ser procesado, intenta nuevamento o ponte en contacto con nosotros.</p>
                                :
                                    ''
                            }
                            <NavLink to="/cart">
                                <button className="btn btn-danger m-1">Carrito</button>
                            </NavLink>
                            {
                                active ?
                                    <button className="btn btn-danger m-1 finalizar-compra">Finalizar Compra</button>
                                :
                                    ''
                            }
                        </center>
                    </form>
            }
        </div>
    )
}


export default FormCheckout