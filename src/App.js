import React, { useEffect, useState} from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import clienteAxios from './components/AxiosConfig'
import CartProvider from './context/cartContext'
import Checkout from './components/Checkout'
import ScrollToTop from './components/ScrollToTop'
import Search from './components/Search'
import image from './assets/img/1x/close.png'

const App = () => {

  const [listado, setListado] = useState([])
  const [loader, setLoader] = useState(true)
  const [open, setOpen] = useState({ open: false})

  useEffect(() => {

    const isOpen = async () => {
      //console.log("empieza el getmepresa");
      await clienteAxios
        .get(`/tienda`)
        .then((res) => {
          const data = res.data;
          setOpen(data)
        })
        .catch((err) => {
          console.log(err);
          setOpen(...open, { open: 0 })
        });
    };

    isOpen();

    const getProducts = async () => {
      //console.log("empieza el getmepresa");
      await clienteAxios
        .get(`/news`)
        .then((res) => {
          const data = res.data;
          setListado(data);
          setLoader(false)
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();

  }, [])


  return (
      <CartProvider>
        <BrowserRouter>
        <Header/>
        <ScrollToTop />
        {
          open.open === 1 ?
          <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Novedades" data={ listado } loader={ loader } />
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
          <Route exact path="/search/:s">
            <Search greeting="Finalizando tu Compra" loader={ loader }/>
          </Route>
        </Switch>
          :
            <div className='container p-5 text-center'>
              <img src={image} className='img-fluid' style={{maxWidth: '300px'}}/>
              <h2 className='p-5 text-center'>{ open.mensaje }</h2>
            </div>
          
        }
        <Footer/>
      </BrowserRouter>
      </CartProvider>
    )
}

export default App;