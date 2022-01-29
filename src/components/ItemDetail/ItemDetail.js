import React from 'react';
import './ItemDetail.css'

export default function ItemDetail ( {producto}) {
  return (
    
    <div className='card'>
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
  );
};
