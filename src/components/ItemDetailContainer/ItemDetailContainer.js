import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail';


export default function ItemDetailContainer () {
    const [productos, setProductos]=useState([]);
    const [loading, setLoading]=useState(true);

    const { idProducto } = useParams()

    useEffect ( () => {
        
        const db = getFirestore();
        const dbItem = doc (db,"items", idProducto);
        
        getDoc(dbItem)
            .then (res => setProductos( { id: res.id, ...res.data() } ))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))
        
    }, [idProducto])

    return (
        <div>
            {loading ? <h2>Cargando...</h2>:
                <ItemDetail product={productos} />
            }
        </div>
    )
};
