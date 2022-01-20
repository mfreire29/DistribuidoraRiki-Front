import React, { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'
import clienteAxios from "./AxiosConfig";
import whatsapp from '../assets/img/whatsapp.svg'

function Navbar() {

  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)


  useEffect(() => {

    const getCategories = async () => {
      //console.log("empieza el getmepresa");
      await clienteAxios
        .get(`/categories`)
        .then((res) => {
          const data = res.data;
          setCategories(data);
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getCategories();

  }, [])



  const cerrar = () => {
    setShow(!show)
  }

  return (
    <>

      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand border-right text-dark">
            Distribuidora Riki
          </NavLink>
          <button  onClick={cerrar} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={show === false ? 'navbar-collapse collapse' : 'navbar-collapse collapse show'} id="navbarCollapse">
            <ul className={show === false ? 'navbar-nav me-auto mb-2 mb-md-0 d-flex' : 'navbar-nav me-auto mb-2 mb-md-0 d-flex trans'} >
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink onClick={cerrar} to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown07">
                  {
                    categories.map(a => {
                      return <li>
                        <NavLink to={`/category/${a.id}`} className="dropdown-item">
                          {a.name}
                        </NavLink>
                      </li>
                    })
                  }
                </ul>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink onClick={cerrar} to="/cart" className="nav-link">
                  Carrito
                </NavLink>
              </li>
            </ul>
            <div className={show === false ? 'd-flex' : 'd-flex trans'}>
              <input className="form-control me-2" type="search" onChange={ e => { setSearch(e.target.value) }} placeholder="Buscar" aria-label="Search" value={search} />
              {
                search.length < 3 ?
                <button onClick={cerrar} className="btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              :
              <NavLink to={`/search/${search}`} >
              <button onClick={cerrar} className="btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              </NavLink>
              }
            </div>
          </div>
              <CartWidget />
              <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=5491134020429&text=%Probando">
                  
                <img src={whatsapp} />
                </a>
              </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
