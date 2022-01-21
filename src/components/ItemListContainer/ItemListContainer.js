import React from 'react';
import './ItemListContainer.css';

function ItemListContainer () {
    const [contador, setContador] = React.useState(0);
    
    const counter = () => {
        setContador(contador+1);
    };

    return (
        <div>
            <button type="button" className="btn btn-success" onClick={counter}>¡Saludos!</button>
            <h1 className="container-fluid mt-2 text-center text-light bg-success p-5 fst-italic">¡¡¡...Hola N°{contador}...!!!</h1>
        </div>
    )
}

export default ItemListContainer
