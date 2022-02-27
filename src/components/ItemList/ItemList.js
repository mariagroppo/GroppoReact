import React from 'react';
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import { useCartContext } from '../../context/CartContext';

export default function ItemList ({prods}) {
    const {cartList} = useCartContext();

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
            <div>
                { cartList.length === 0 ?
                    <br/>
                    :
                    <div>
                        <Link to="/cart">
                            <button type="button" className="btn btn-success btn-sm my-3 fs-3">
                                Terminar compra
                            </button>
                        </Link>
                    </div>
                }
            </div>
            <div className="d-flex flex-wrap justify-content-around">
                {prods.map( (product) => <Item key={product.id} product={product}/> )}
            </div>
        </div>
    )
}