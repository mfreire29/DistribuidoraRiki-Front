import React, { useEffect, useState} from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import { Firestore } from './firebaseConfig'
import CartProvider from './context/cartContext'
import Checkout from './components/Checkout'

const App = () => {

  const [listado, setListado] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {

    const db = Firestore
    const collection = db.collection("items")
    const query = collection.get()

    query
    .then((res) =>{

      const items_array = res.docs
      
      let items_obtenidos = []

      items_array.forEach(item => {

        const producto_final = {
          id : item.id,
          ...item.data()
        }

        items_obtenidos.push(producto_final)
        
        setLoader(false)
        
      })
      setListado(items_obtenidos)
    })
    .catch(() => {
      console.log("falló")
    })
  }, [])


  return (
      <CartProvider>
        <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Listado de Productos" data={ listado } loader={ loader } />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting="Listado de Productos" data={ listado } loader={ loader }/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer greeting="Detalle de Producto" data={ listado }/>
          </Route>
          <Route exact path="/cart">
            <Cart greeting="Cesta de Compras"/>
          </Route>
          <Route exact path="/checkout">
            <Checkout greeting="Finalizando tu Compra"/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </CartProvider>
    )
}

export default App;