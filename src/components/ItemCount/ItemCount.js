import React from 'react';
import { useState } from 'react';

export default function ItemCount (props) {
    const [count, setCount]=useState(props.initial)

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
        props.onAdd(count)
        setCount(0)
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
            <button type="button" className="btn btn-warning btn-sm my-2" onClick={agregarCarrito}>
                Agregar al carrito
            </button>
        </div>
      </div>

);
};
