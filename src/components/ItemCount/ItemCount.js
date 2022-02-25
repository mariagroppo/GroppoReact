import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

export default function ItemCount (props) {
    const {cartList, agregarItemAlCarrito, quantityElementsCart} = useCartContext();
    const [count, setCount]=useState(props.initial)
    
    let value = false
    cartList.forEach ( (prod) => {
        if (prod.id === props.product.id) {
            value=true
        }
    })
    const [inCart, setInCart]=useState(value);
    
       
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
            agregarItemAlCarrito( { ...props.product, quantity: count})
            setInCart(true);
            quantityElementsCart(count);
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
            { inCart === false ?
                    <button type="button" className="btn btn-warning btn-sm my-2" onClick={agregarCarrito}>
                        Agregar al carrito
                    </button>
                    :
                    <div className="container justify-content-center d-flex flex-wrap align-content-center">
                        <button type="button" className="btn btn-warning btn-sm my-2 mx-2" onClick={agregarCarrito}>
                            Agregar al carrito
                        </button>
                        <svg className="bi bi-cart-check-fill mt-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>

                    </div>

                    
                }
        </div>
      </div>

);
};
