import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            CAPADOCIA
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown07">
                  <li>
                    <NavLink to="/category/1" className="dropdown-item">
                      Mujer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/2" className="dropdown-item">
                      Hombre
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/cart" className="nav-link">
                  Carrito
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartWidget/>
    </>
  );
}

export default Navbar;
