import React from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail ( {producto}) {
    
    return (
    
    <div className='card'>
        <div>
            <div>
                <h5 className='card-title'>{producto.name}</h5>
            </div>
            <div>
                <img src={producto.photo} className='imgDetail' alt={producto.alterna}/>
            </div>
            <div className='card-body'>
                <p className='card-text'>{producto.detail}</p>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>CATEGORIA: {producto.categoria}</li>
                <li className='list-group-item'>PRECIO: ${producto.price}</li>
            </ul>
        </div>
        <Link to="/productos">
                <button type="button" className="btn btn-success btn-sm my-3">
                    Volver al listado
                </button>
        </Link>
        {/* <ItemCount stock={producto.stock} initial={0} onAdd={onAdd}/> */}
        <ItemCount stock={producto.stock} initial={0} producto={producto}/>
    </div>
  );
};
