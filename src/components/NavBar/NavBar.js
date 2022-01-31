import React from 'react'
import logo from '../img/trentLogo.png'
import carrito from '../img/carrito-de-supermercado.png'
import {Link} from 'react-router-dom'

const NavBar = () => {
    
    return (
        <div>
            <h1 className="tituloIndex">TRENT CRAFT BEER</h1>
            <div>
                <div>
                  <nav className="navbar navbar-expand-md navbar-light bg-light">
                      <Link to='/'>
                        <img src={logo} alt="LogoTrent" width="100" height="50" className="d-inline-block align-text-top"/>
                      </Link>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                          <ul className="navbar-nav mr-auto">
                              
                              <Link to="/productos">
                                Productos
                              </Link>
                              <li className="nav-item">
                                <a className="nav-link" href="mediosDePago.html">Medios de pago</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="contacto.html">Contacto</a>
                              </li>
                              <Link to='/cart'>
                                <img src={carrito} alt="LogoTrent" width="40" height="40" className="d-inline-block align-text-top"/>
                              </Link>
                          </ul>
                      </div>
                  </nav>
                </div>
            </div>
        
        </div>
    )
}

export default NavBar