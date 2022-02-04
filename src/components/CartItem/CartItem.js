import React from 'react';

export default function CartItem(props) {
    let subTotal = parseInt(props.producto.cantidad)*parseFloat(props.producto.price)
    
    return (
    <div>
        <tbody className="table">
            <tr>
                <th>{props.producto.cantidad}</th>
                <td>{props.producto.name}</td>
                <td>${props.producto.price}</td>
                <td> - Sub-total: ${subTotal}</td>
            </tr>                
        </tbody>
        
    </div>
  )
}
