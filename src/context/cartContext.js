import { Toast } from 'materialize-css';
import React, { createContext, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

const CartProvider = (props) => {

    let carroStorage = JSON.parse(localStorage.getItem('carro'))
    if(!carroStorage) {
        carroStorage = []
    }
    let totalStorage = JSON.parse(localStorage.getItem('total'))
    if(!totalStorage) {
        totalStorage = 0
    }
    let unidadesStorage = JSON.parse(localStorage.getItem('unidades'))
    if(!unidadesStorage) {
        unidadesStorage = 0
    }

    const [carro, setCarro] = useState(carroStorage)
    const [carroFinal, setCarroFinal] = useState(carroStorage)
    const [unidadesCarro, setUnidadesCarro] = useState(unidadesStorage)
    const [totalCarro, setTotalCarro] = useState(totalStorage)

    useEffect( () => {
        if (carroStorage) {
          localStorage.setItem('carro', JSON.stringify(carro))
          localStorage.setItem('total', JSON.stringify(totalCarro))
          localStorage.setItem('unidades', JSON.stringify(unidadesCarro))
        } else {
          localStorage.setItem('carro', JSON.stringify([]))
          localStorage.setItem('total', JSON.stringify([]))
          localStorage.setItem('unidades', JSON.stringify([]))
        }
      }, [carro, carroStorage]);

    const notify = mensaje => toast.info(mensaje, 
        {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
        }
    );

    const addItem = (item, title, quantity, price, pictureUrl, stock) => {        
        if(isInCart(item).length === 1) {
            let un = carro.filter(a => a.id === item)
            const carrito = carro.filter(a => a.id !== item)
            if((quantity + un[0].quantity) > stock) {
                notify('No hay suficiente stock')
            } else {
                setCarro([...carrito, { id: item, title: title, quantity: (quantity + un[0].quantity) , precio: price, pictureUrl: pictureUrl, total: (price*(quantity + un[0].quantity)) }])
                setUnidadesCarro(unidadesCarro - un[0].quantity + (quantity + un[0].quantity))
                setTotalCarro(totalCarro - (un[0].precio * un[0].quantity) + (price*(quantity + un[0].quantity)))
                notify('Producto Agregado')
            }
        } else {
            setCarro([...carro, { id: item, title: title, quantity: quantity, precio: price, pictureUrl: pictureUrl, total: (price*quantity) }])
            setCarroFinal([...carroFinal, { id: item, title: title, quantity: quantity, precio: price, total: (price*quantity) }])
            setUnidadesCarro(unidadesCarro + quantity)
            setTotalCarro(totalCarro + (price*quantity))
            notify('Producto Agregado')
        }
    }

    const removeItem = (id, quantity) => {
        let un = carro.filter(a => a.id === id)
        setUnidadesCarro(unidadesCarro - un[0].quantity)
        setTotalCarro(totalCarro - (un[0].precio * un[0].quantity))
        const carrito = carro.filter(a => a.id !== id)
        setCarro(carrito)
        notify('Producto Eliminado')
    }

    const clear = () => {
        setCarro([])
        setUnidadesCarro(0)
        setTotalCarro(0)
    }

    const isInCart = (id) => {
        let existe = carro.filter(a => a.id === id)
        return existe
    }

     

    return (
        <CartContext.Provider
            value= {{
                carro,
                setCarro,
                addItem,
                removeItem,
                isInCart,
                clear,
                unidadesCarro,
                totalCarro,
                notify,
                setUnidadesCarro,
                setTotalCarro,
                carroFinal,
                setCarroFinal
            }}
        >
            {props.children}
            <ToastContainer/>
        </CartContext.Provider>
    )
}

export default CartProvider
