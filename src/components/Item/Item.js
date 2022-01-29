import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';

export default function Item ( {producto} ) {
    
    const [count, setCount]=useState(0)
    let stock=producto.stock;

    function restar () {
        if (count >0) {
            setCount(count-1)
        }
    }
    function sumar () {
        if (count < stock) {
            setCount(count+1)
        }
    }

    function agregarCarrito () {
        if (count>0) {
            console.log(`Se agregan ${count} unidades de ${producto.name} al carrito.`)
            setCount(0)
        } 
        
        
    }
    
    return (
        <div key={producto.id} className="card m-1">
            <img src={producto.photo} className="card-img-top" alt={producto.alterna}/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">${producto.price}</p>
            </div>
            {/* El producto.id se pone con bastic */}
            <Link to={ `/detailContainer/${producto.id}` }>
                <button type="button" className="btn btn-success btn-sm">
                    Detalle
                </button>
            </Link>
            <br/>
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
)
}