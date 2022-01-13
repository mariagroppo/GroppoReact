import React from 'react'
import logo from '../img/trentLogo.png'
import carrito from '../img/carrito-de-supermercado.png'
import CartWidget from '../CartWidget/CartWidget'
/* import CartWidget from './components/CartWidget' */

const NavBar = () => {
    
    return (
        <div>
            <h1 className="tituloIndex">TRENT CRAFT BEER</h1>
            <div>
                <div>
                  <nav className="navbar navbar-expand-md navbar-light bg-light">
                      <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="LogoTrent" width="100" height="50" className="d-inline-block align-text-top"/>
                      </a>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                          <ul className="navbar-nav mr-auto">
                              
                              <li className="nav-item">
                                <a className="nav-link active" href="productos.html">Productos</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="mediosDePago.html">Medios de pago</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="contacto.html">Contacto</a>
                              </li>
                              <li className="nav-item dropdown">
                                <CartWidget imagen={carrito} />
                              </li>
                          </ul>
                      </div>
                  </nav>
                </div>
            </div>
        
        </div>
    )
}

export default NavBar