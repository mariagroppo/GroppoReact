import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';

export default function Item ( {product} ) {
    
    return (
        <div key={product.id} className="card m-1 shadow-lg">
            <div>
                <img src={product.photo} className="card-img-top" alt={product.alternate}/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                </div>
            </div>
            <Link to={ `/detailContainer/${product.id}` }>
                <button type="button" className="btn btn-success btn-sm">
                    Detalle
                </button>
            </Link>
            <br/>
            <div>
                { product.stock === 0 ?
                    <button type="button" className="btn btn-secondary btn-sm my-2">
                        SIN STOCK
                    </button>
                :
                <ItemCount stock={product.stock} initial={0} product={product}/>
                }
            </div>
            
        </div>
)
}