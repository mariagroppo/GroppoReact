import React from 'react';
import { useCartContext } from '../../context/CartContext';

export default function CartItem({producto}) {
    let subTotal = producto.cantidad * producto.price
    const {removeItem} = useCartContext();
    
    return (
        <tr>
            <th scope="row">{producto.id}</th>
            <td>{producto.name}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.price}</td>
            <td>{subTotal}</td>
            <td>
                <button type="button" className="btn btn-danger btn-sm m-2" onClick={()=>removeItem(producto.id)}>
                    X
                </button>
            </td>
        </tr>
        
    );
}
