import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail ( {product}) {
    
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-8">
                    <div className='card m-3 shadow-lg'>
                        <div>
                            <div>
                                <h5 className='card-title my-2'>{product.name}</h5>
                            </div>
                            <div>
                                <img src={product.photo} className="img-fluid" alt={product.alternate}/>
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>{product.detail}</p>
                            </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>CATEGORIA: {product.category}</li>
                                <li className='list-group-item'>PRECIO: ${product.price}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <Link to="/productos">
                        <button type="button" className="btn btn-success btn-sm my-3">
                            Volver al listado
                        </button>
                    </Link>
                   <div>
                        { product.stock === 0 ?
                            <button type="button" className="btn btn-secondary btn-sm my-2">
                                SIN STOCK
                            </button>
                        :
                        <ItemCount stock={product.stock} initial={0} product={product}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
