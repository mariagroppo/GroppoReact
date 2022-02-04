import React from 'react';

export default function CartItem({producto}) {
    let subTotal = producto.cantidad * producto.price
    return (
        <tr>
            <th scope="row">{producto.id}</th>
            <td>{producto.name}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.price}</td>
            <td>{subTotal}</td>
        </tr>
        
    );
}
