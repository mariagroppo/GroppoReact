import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem({producto}) {
    let subTotal = producto.cantidad * producto.price
    
    return (
        <tr>
            <th scope="row">{producto.id}</th>
            <td>{producto.name}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.price}</td>
            <td>{subTotal}</td>
            <td>
                <Link to="/productos">
                    <button type="button" className="btn btn-danger btn-sm m-2">
                        X
                    </button>
                </Link>
            </td>
        </tr>
        
    );
}
