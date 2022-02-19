import React from 'react';
import { useCartContext } from '../../context/CartContext';

export default function CartItem({product}) {
    let subTotal = product.quantity * product.price
    const {removeItem} = useCartContext();
    
    return (
        <tr>
            
            <th scope="row">{product.name}</th>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{subTotal}</td>
            <td>
                <button type="button" className="btn btn-danger btn-sm m-2" onClick={()=>removeItem(product.id)}>
                    X
                </button>
            </td>
        </tr>
        
    );
}
