import React from 'react'
import logo from '../../img/trentLogo.png'
import carrito from '../../img/carrito-de-supermercado.png'
import {Link} from 'react-router-dom'

const NavBar = () => {
    
    return (
        <div>
            <div>
                <div>
                  <nav class="navbar navbar-expand-sm navbar-light bg-light">
                    <div class="container-fluid">
                        <Link to='/'>
                          <img src={logo} alt="LogoTrent" width="100" height="50" className="d-inline-block align-text-top"/>
                        </Link>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <Link to="/productos" className="nav-link">
                                Productos
                            </Link>
                            <li class="nav-item">
                              <a class="nav-link" href="mediosDePago.html">Medios de pago</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="contacto.html">Contacto</a>
                            </li>
                            <Link to='/cart'>
                                <img src={carrito} alt="LogoTrent" width="40" height="40" className="d-inline-block align-text-top mx-3"/>
                            </Link>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
        
        </div>
    )
}

export default NavBar