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

/*
const data = [
  {
"id": 1,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Hombre",
  "description": "Remera lisa de ALgodón",
  "price": 950.00,
  "stock": 0,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/1.jpg',
},
{
"id": 2,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Mujer",
  "description": "Remera Rayada blanca",
  "price": 700.00,
  "stock": 14,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/2.jpg',
},
{
"id": 3,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Niño",
  "description": "Remera de Mickey",
  "price": 650.00,
  "stock": 5,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/3.jpg',
},
{
"id": 4,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Hombre",
  "description": "Remera lisa de ALgodón",
  "price": 950.00,
  "stock": 2,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/4.jpg',
},
{
"id": 5,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Mujer",
  "description": "Remera Rayada blanca",
  "price": 700.00,
  "stock": 14,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/5.jpg',
},
{
"id": 6,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Niño",
  "description": "Remera de Mickey",
  "price": 650.00,
  "stock": 5,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/6.jpg',
},
{
"id": 7,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Hombre",
  "description": "Remera lisa de ALgodón",
  "price": 950.00,
  "stock": 2,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/7.jpg',
},
{
"id": 8,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Mujer",
  "description": "Remera Rayada blanca",
  "price": 700.00,
  "stock": 14,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/8.jpg',
},
{
"id": 9,
  "category": 1,
  "category_name": "Mujer",
  "title": "Remera Niño",
  "description": "Remera de Mickey",
  "price": 650.00,
  "stock": 5,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/9.jpg',
},
{
"id": 10,
  "category": 2,
  "category_name": "Hombre",
  "title": "Remera Hombre",
  "description": "Remera lisa de ALgodón",
  "price": 950.00,
  "stock": 2,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/10.jpg',
},
{
"id": 11,
  "category": 2,
  "category_name": "Hombre",
  "title": "Remera Mujer",
  "description": "Remera Rayada blanca",
  "price": 700.00,
  "stock": 14,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/11.jpg',
},
{
"id": 12,
  "category": 2,
  "category_name": "Hombre",
  "title": "Remera Niño",
  "description": "Remera de Mickey",
  "price": 650.00,
  "stock": 5,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/12.jpg',
},
{
"id": 13,
  "category": 2,
  "category_name": "Hombre",
  "title": "Remera Mujer",
  "description": "Remera Rayada blanca",
  "price": 700.00,
  "stock": 14,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/13.jpg',
},
{
"id": 14,
  "category": 2,
  "category_name": "Hombre",
  "title": "Remera Niño",
  "description": "Remera de Mickey",
  "price": 650.00,
  "stock": 5,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/14.jpg',
}
,
{
"id": 15,
  "category": 2,
  "category_name": "Hombre",
  "title": "Remera Niño",
  "description": "Remera de Mickey",
  "price": 650.00,
  "stock": 5,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/15.jpg',
},
{
"id": 16,
  "category": 2,
  "category_name": "Hombre",
  "title": "Remera Niño",
  "description": "Remera de Mickey",
  "price": 650.00,
  "stock": 5,
  "pictureUrl": 'https://www.bief.com.ar/capadocia_web/16.jpg',
}
]
*/

const App = () => {

  const [listado, setListado] = useState([])
  const [loader, setLoader] = useState(true)

useEffect(() => {

  const db = Firestore
  const collection = db.collection("items")
  const query = collection.get()

  query
  .then((res) =>{
    //console.log(res.docs)
    const items_array = res.docs
    
    let items_obtenidos = []

    items_array.forEach(item => {
      //console.log(item.id)
      //console.log(item.data())
      const producto_final = {
        id : item.id,
        ...item.data()
      }

      items_obtenidos.push(producto_final)
      
      setLoader(false)
      
      console.log(producto_final)
    })
    setListado(items_obtenidos)
  })
  .catch(() => {
    console.log("falló")
  })
}, [])
/*
useEffect(() => {
    const promesa = new Promise((resolver, rechazar)=>{
      setTimeout(() => {
          
          console.log('Termino el pedido')
          let codigo = 200
          
          if(codigo < 400){
              resolver(data)
          } else {
              rechazar('Hubo un error')
          }

      }, 2000);
  })

  promesa
  .then((resultado)=>{
      setListado(resultado)
      setLoader(false)
  })
  .catch(()=>{
      console.log('Salió todo mal')
  })
}, [])
*/
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
    /*
    [
        <>
          <Header/>
          <Main/>
          <Footer/>   
        </>
    ]
    */
}

// SIa alguien llega a hacer un import de este archivo, lo que va a obtener por defecto es la variablle APP
//Commonjs
//module.exports = App
//ES6
export default App;