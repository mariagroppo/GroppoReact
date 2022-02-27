import React, {createContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export const ContextApp = createContext();

export default function ContenedorProductos () {
    const [prods, setProds] = useState([]);
    const [loading, setLoading]=useState(true);
    const {idCategoria} = useParams();
    
    useEffect ( ()=> {
        setLoading(true);
        const db = getFirestore()
        const dbCollection = collection (db,"items")
        const queryFiltro = !idCategoria ?
            dbCollection
        :
            query(dbCollection, 
                where('category', '==', idCategoria) )
        getDocs(queryFiltro)
        .then (res=> setProds(res.docs.map(prod => ( {id: prod.id, ...prod.data()} ) )))
        .catch (err => console.log(err))
        .finally ( ()=> setLoading(false))
        
    }, [idCategoria])

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {loading ? <h2 className="m-2 fs-5">Cargando...</h2>:
                <ItemList prods={prods}/>
            }
        </div>
    )
}

