import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

export default function CartWidget () {
    
    const {cartList, agregarItemAlCarrito} = useCartContext();

    return (
        <div>
            <h1>
                Carrito de compras
            </h1>
            <div>
                <table className="table table-striped">
                    {cartList.map( (producto) => <CartItem producto={producto}/> )}
                </table>
            </div>
            <div>
                    {/* Armar pagina de pago */}
                    <Link to="/">
                        <button type="button" className="btn btn-success btn-sm m-2">
                            Pagar
                        </button>
                    </Link>
                    <Link to="/productos">
                        <button type="button" className="btn btn-success btn-sm m-2">
                            Seguir comprando
                        </button>
                    </Link>
                    
                </div>
        </div>
                
    )
}