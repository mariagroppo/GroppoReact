import React from 'react';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import task from '../../DatosProductos';
import ItemList from '../ItemList/ItemList';

export default function ContenedorProductos () {
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(true);
    
    const {idCategoria} = useParams()
    console.log(idCategoria)
    
    useEffect ( ()=> {
        if (idCategoria) {
            task()
            .then (res=> setProductos(res.filter (prod => prod.categoria===idCategoria)))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))
        } else {
            task()
            .then (res=> setProductos(res))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))    
        }
        
        
    }, [idCategoria])

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {loading ? <h2>Cargando...</h2>:
                <ItemList prod={productos} />
            }
        </div>
    )
}

