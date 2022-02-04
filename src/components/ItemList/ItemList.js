import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import {ContextApp} from '../ContenedorProductos/ContenedorProductos'

export default function ItemList () {
    const {prods} = useContext(ContextApp);
    return (
        <div className="row d-flex flex-wrap justify-content-around">
            <div className="btn-group d-flex justify-content-center my-2" role="group" aria-label="Basic example">
                <Link to="/productos">
                    <button type="button" className="btn btn-primary mx-1">
                        Todos
                    </button>
                </Link>
                <Link to="/productos/Latas">
                    <button type="button" className="btn btn-primary mx-1">
                        Latas
                    </button>
                </Link>
                <Link to="/productos/Pack">
                    <button type="button" className="btn btn-primary mx-1">
                        Packs
                    </button>
                </Link>
                
            </div>
            <div className="d-flex flex-wrap justify-content-around">
                {prods.map( (producto) => <Item producto={producto}/> )}
            </div>
            
        </div>
        
        
    )
}