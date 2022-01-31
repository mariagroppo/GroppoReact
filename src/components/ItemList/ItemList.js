import { Link } from "react-router-dom";
import Item from "../Item/Item";

export default function ItemList ({prod}) {
    return (
        <div className="row d-flex flex-wrap justify-content-around">
            <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
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
                {prod.map( (producto) => <Item producto={producto}/> )}
            </div>
            
        </div>
    )
}