import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { task } from '../../DatosProductos';
import ItemDetail from '../ItemDetail/ItemDetail';


export default function ItemDetailContainer () {
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(true);

    const { idProducto } = useParams()

    useEffect ( ()=> {
        if (idProducto) {
            task
            .then (res=> setProductos(res.find(elemento => elemento.id===idProducto)))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))
        } else {
            task
            .then (res=> setProductos(res))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))
        }
        
        
    }, [idProducto])

    return (
        <div>
            <ItemDetail producto={productos} />
        </div>
    )
};
