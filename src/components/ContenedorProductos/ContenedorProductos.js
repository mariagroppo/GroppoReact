import React, {createContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import task from '../../data/DatosProductos';
import ItemList from '../ItemList/ItemList';

export const ContextApp = createContext();

export default function ContenedorProductos () {
    const [prods, setProds] = useState([]);
    const [loading, setLoading]=useState(true);
    
    const {idCategoria} = useParams()
    
    useEffect ( ()=> {
        setLoading(true);
        if (idCategoria) {
            task()
            .then (res=> setProds(res.filter (prod => prod.categoria===idCategoria)))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))
        } else {
            task()
            .then (res => setProds(res))
            .catch (err => console.log(err))
            .finally ( ()=> setLoading(false))
        }
    }, [idCategoria])

    return (
        <ContextApp.Provider value={{prods}}>
            <div className="d-flex flex-wrap justify-content-around">
                {loading ? <h2 className="m-2 fs-5">Cargando...</h2>:
                    <ItemList />
                }
            </div>
        </ContextApp.Provider>
        
        
        
        
        
    )
}

