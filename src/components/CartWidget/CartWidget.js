import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

export default function CartWidget () {
    
    const {cartList, vaciarCarrito} = useCartContext();
    
    let total=0;
    cartList.map( (producto) => {
        total=total + parseFloat(producto.price * producto.cantidad)
    } )
    
    return (
        <div>
            <h1 className="fs-3 m-3">
                Carrito de compras
            </h1>
            <div>
                { cartList.length === 0 ? (
                    <div>
                        <h1 className="fs-4 m-3">El carrito está vacío.</h1>
                        <Link to="/productos">
                                <button type="button" className="btn btn-success btn-sm m-2">
                                    Seguir comprando
                                </button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio Unitario ($)</th>
                                    <th scope="col">Subtotal ($)</th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.map( (producto) => <CartItem producto={producto}/> )}
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td></td>
                                        <td></td>
                                        <td className="fw-bold">TOTAL</td>
                                        <td>{total}</td>
                                    </tr>
                                </tbody>
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
                            <Link to="/productos">
                                <button type="button" className="btn btn-success btn-sm m-2" onClick={vaciarCarrito}>
                                    Vaciar carrito
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>    
    )
}