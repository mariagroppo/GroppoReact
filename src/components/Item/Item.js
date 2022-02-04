import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';

export default function Item ( {producto} ) {
    
    let stock=producto.stock;
        
    return (
        <div key={producto.id} className="card m-1 shadow-lg">
            <div>
                <img src={producto.photo} className="card-img-top" alt={producto.alterna}/>
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text">${producto.price}</p>
                </div>
            </div>
            {/* El producto.id se pone con bastic */}
            <Link to={ `/detailContainer/${producto.id}` }>
                <button type="button" className="btn btn-success btn-sm">
                    Detalle
                </button>
            </Link>
            <br/>
            {/* <ItemCount stock={stock} initial={0} onAdd={onAdd}/> */}
            <ItemCount stock={producto.stock} initial={0} producto={producto}/>
            
        </div>
)
}