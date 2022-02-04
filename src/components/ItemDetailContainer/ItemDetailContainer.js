import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import task from '../../data/DatosProductos';
import ItemDetail from '../ItemDetail/ItemDetail';


export default function ItemDetailContainer () {
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(true);

    const { idProducto } = useParams()

    useEffect ( ()=> {
        if (idProducto) {
            task()
            .then (res=> setProductos(res.find(elemento => elemento.id===idProducto)))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))
        }
    }, [idProducto])

    return (
        <div>
            {loading ? <h2>Cargando...</h2>:
                <ItemDetail producto={productos} />
            }
        </div>
    )
};
