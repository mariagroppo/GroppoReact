import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export default function ItemCount (props) {
    const [count, setCount]=useState(props.initial)
    const [contador, setContador]=useState(0)
    
    const {cartList, agregarItemAlCarrito} = useCartContext();
       
    function restar () {
        if (count >0) {
            setCount(count-1)
        }
    }

    function sumar () {
        if (count < props.stock) {
            setCount(count+1)
        }
    }

    function agregarCarrito () {
        if (count>0) {
            setCount(0);
            setContador(count);
            agregarItemAlCarrito( { ...props.producto, cantidad: count})
        }
    } 
    
    return (
      <div>
        <div className="container justify-content-center d-flex flex-wrap align-content-center">
                
                <div className="mx-2">
                    <button type="button" className="btn btn-outline-warning" onClick={restar}>-</button>
                </div>
                <div className="mt-2">
                    {count}
                </div>
                <div className="mx-2">
                    <button type="button" className="btn btn-outline-warning" onClick={sumar}>+</button>
                </div>
            
        </div>
        <div>
            { contador === 0 ?
                <button type="button" className="btn btn-warning btn-sm my-2" onClick={agregarCarrito}>
                    Agregar al carrito
                </button>
                :
                /* Despues del desafío, el boton que tiene que quedar es Agregar más al carrito... */
                <div>
                    <Link to="/cart">
                        <button type="button" className="btn btn-success btn-sm my-3">
                            Terminar compra
                        </button>
                    </Link>
                </div>

                
            }
            
        </div>
      </div>

);
};
