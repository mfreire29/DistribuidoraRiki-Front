import React, { useState, useContext } from 'react'
import {CartContext} from '../context/cartContext'
import firebase from 'firebase'
import { Firestore } from '../firebaseConfig'
import { NavLink } from 'react-router-dom'


function FormCheckout({ setIdOrden, setNombreComprador }) {

    const [nombre, setNombre ] = useState('')
    const [telefono, setTelefono ] = useState('')
    const [email, setEmail ] = useState('')
    const [email2, setEmail2 ] = useState('')
    const [loader, setLoader] = useState(false)

    const { totalCarro, setCarro, carroFinal, setCarroFinal, setUnidadesCarro, setTotalCarro, notify } = useContext(CartContext)

    const finalizarCompra = e => {
        e.preventDefault()
        if(nombre === '') { notify('Debes completar tu nombre'); return}
        if(telefono === '') { notify('Debes completar tu teléfono'); return}
        if(email === '') { notify('Debes completar tu E-mail'); return}
        if(email !== email2) { notify('¡Los correos deben coincidir!'); return}
        
        setLoader(true)
        const orden = {
            buyer: {nombre, telefono, email},
            items: carroFinal,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalCarro
        }
        setNombreComprador(nombre)

        const db = Firestore
        const collection = db.collection("orders")

        collection
        .add(orden)
        .then((res) => {
            setTimeout(() => { setIdOrden(res.id)}, 3000);        
            setTimeout(() => { setCarro([])}, 3000);        
            setTimeout(() => { setCarroFinal([])}, 3000);        
            setTimeout(() => { setUnidadesCarro(0)}, 3000);        
            setTimeout(() => { setTotalCarro(0)}, 3000);        
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="mt-5">
            <form onSubmit={ finalizarCompra }>
                <div className="form-group mb-3">
                    <input onChange={ e => setNombre(e.target.value)} className="form-control" type="text" placeholder="Nombre" value={ nombre }/>
                </div>
                <div className="form-group mb-3">
                    <input onChange={ e => setTelefono(e.target.value)} className="form-control" type="tel" placeholder="Teléfono" value={ telefono }/>
                </div>
                <div className="form-group mb-3">
                    <input onChange={ e => setEmail(e.target.value)} className="form-control" type="text" placeholder="Email" value={ email }/>
                </div>
                <div className="form-group mb-3">
                    <input onChange={ e => setEmail2(e.target.value)}  className="form-control" type="text" placeholder="Confirmar Email" value={ email2 }/>
                </div>
                <center>
                        { loader ? 
                            <div className="text-center my-3">
                                <p className="animate__animated animate__backInLeft">Estamos preparando tu bolsa &#128540;</p>
                                <div className="spinner-border" role="status">
                                </div>
                            </div> 
                        :
                            ''
                        }
                    <NavLink to="/cart">
                        <button className="btn btn-danger m-1">Carrito</button>
                    </NavLink>
                    <button className="btn btn-danger m-1">Finalizar Compra</button>
                </center>
            </form>
        </div>
    )
}

export default FormCheckout
