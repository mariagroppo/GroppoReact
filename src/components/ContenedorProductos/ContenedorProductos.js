import React from 'react';
import {useEffect, useState} from 'react';
import { task } from '../../DatosProductos';
/* import Item from './Item'; */
import ItemList from './ItemList';

export default function ContenedorProductos () {
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(true);
    
    useEffect ( ()=> {
        task
            .then (res=> setProductos(res))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))
    }, [])

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {loading ? <h2>Cargando...</h2>:
                <ItemList prod={productos} />
            }
        </div>
    )
}
