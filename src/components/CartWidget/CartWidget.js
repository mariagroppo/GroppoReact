import React from 'react';
import carrito from '../../img/carrito-de-supermercado.png';
import { useCartContext } from '../../context/CartContext';

export default function CartWidget() {
    const {quantityElements} = useCartContext();
    
    return (
        <div>
            <img src={carrito} alt="LogoTrent" width="40" height="40" className="d-inline-block align-text-top mx-3 position-relative"/>
            { quantityElements > 0 ? 
                <span className="position-absolute top-15 start-30 translate-middle badge rounded-pill bg-danger">
                        {quantityElements}
                    </span>
            : (
                <div></div>
            )}

        </div>
        
  )
}
