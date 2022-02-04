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
            let condition = true;
            cartList.forEach ( (prod) => {
                if (condition) {
                    if (props.producto.id === prod.id) {
                        condition=false
                    }
                } else {
                    console.log("Ya se encontro el producto en el array")
                }
            })

            if (condition) {
                console.log("producto NO repetido")
                console.log(`Se agregan ${count} unidades de ${props.producto.name} al carrito.`)
                agregarItemAlCarrito( { ...props.producto, cantidad: count})
                setContador(count)
                setCount(0)
            } else {
                console.log("producto repetido")
            }
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
                    <Link to="/productos">
                        <button type="button" className="btn btn-success btn-sm my-3">
                            Seguir comprando
                        </button>
                    </Link>
                    
                </div>

                
            }
            
        </div>
      </div>

);
};
