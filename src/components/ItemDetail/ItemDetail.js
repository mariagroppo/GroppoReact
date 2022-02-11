import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail ( {producto}) {
    
    return (
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-8">
                    <div className='card m-3 shadow-lg'>
                        <div>
                            <div>
                                <h5 className='card-title my-2'>{producto.name}</h5>
                            </div>
                            <div>
                                <img src={producto.photo} className="img-fluid" alt={producto.alterna}/>
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>{producto.detail}</p>
                            </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>CATEGORIA: {producto.categoria}</li>
                                <li className='list-group-item'>PRECIO: ${producto.price}</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="col-sm-4">
                    <Link to="/productos">
                        <button type="button" className="btn btn-success btn-sm my-3">
                            Volver al listado
                        </button>
                    </Link>
                   <ItemCount stock={producto.stock} initial={0} producto={producto}/>
                </div>
            </div>
        </div>

    
  );
};
