import React from 'react';
import ReactDOM from 'react-dom';

function ItemListContainer () {
    /* const [contador, setContador] = React.useState(0) */
    let contador=0
    return (
        <div>
            <button type="button" className="btn btn-success" onClick={ () => {
                contador=contador+1
                /* console.log(contador) */
                ReactDOM.render(
                    <h1>¡¡¡...Hola N°{contador}...!!!</h1>,
                    document.getElementById('contador')
                  );
            }} >¡Saludos!</button>
        </div>
    )
  
}

export default ItemListContainer
