import React from 'react'
import logo from '../../img/trentLogo.png'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    
    return (
        <div>
            <div>
                <div>
                  <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to='/'>
                          <img src={logo} alt="LogoTrent" width="100" height="50" className="d-inline-block align-text-top"/>
                        </Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/productos" className="nav-link">
                                Productos
                            </Link>
                            <li className="nav-item">
                              <a className="nav-link" href="mediosDePago.html">Medios de pago</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="contacto.html">Contacto</a>
                            </li>
                            <Link to='/cart'>
                                <CartWidget/>
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