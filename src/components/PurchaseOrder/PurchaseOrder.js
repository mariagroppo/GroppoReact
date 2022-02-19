import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import swal from 'sweetalert';
import { collection, getFirestore, addDoc} from 'firebase/firestore'

export default function PurchaseOrder() {
    const {cartList, emptyCart} = useCartContext();
    
    let total=0;
    cartList.map( (product) => {
        total=total + parseFloat(product.price * product.quantity)
    } )

    const executePurchase = async (e) => {
        e.preventDefault();
        let order = {};
        order.buyer = {name:"Maria", email:"m@gmail.com", phone:"123456"};
        order.total={total};
        order.date=new Date();
        order.items = cartList.map( (prod) => {
            const id = prod.id;
            const name = prod.name;
            const price = prod.price;
            const quantity = prod.quantity;
            const sum = prod.price * prod.quantity;
            return {
                id,
                name,
                price,
                quantity,
                sum
            }
        })
        console.log(order);
        const db=getFirestore();
        const ordersCollection = collection (db, 'orders');
        await addDoc (ordersCollection, order)
            .then (res => {
                let purchaseCode = res.id
                swal("Código de su compra: " + purchaseCode + ". Su pedido estará listo para ser retirado en 24hs.");
            })
        emptyCart();
    }

        /* ----------------------- Actualizacion de stock en Firebase ---------------------*/
       /*  const queryCollection = collection (db, 'items')
        
        const updateStock = query (
            queryCollection,
            where ( documentId, "in", cartList.map ( (it) => it.id ) )
        )
        
        const batch = writeBatch(db);
        await getDocs(updateStock)
            .then( resp => resp.docs.forEach( res => batch.update (res.ref, {
                stock: res.data().stock - cartList.find( item => item.id === res.id).cantidad
            } )) )
            .catch (err => console.log(err))
            .finally( () => console.log("Stock actualizado."))
        batch.commit(); */
        
        
    /* }
 */
    return (
    <div>
        <div className="container">
            <h2 className="justify-content-center mb-3 my-3">Orden de compra</h2>
            <div className="col">
                <form className="row">
                    <div className="form-group col-sm-6">
                        <label type="text" className="col-form-label">Cliente</label>
                        <div>
                            <input type="text" className="form-control" placeholder="Ingresa nombre cliente"/>
                            <small> *Por favor completar el campo.</small>
                        </div>
                    </div>
                    <div className="form-group col-sm-6">
                        <label type="email" className="col-form-label">Correo</label>
                        <div>
                            <input type="email" className="form-control" id="correoLista" placeholder="Ingresa tu correo"/>
                            <small> *Por favor completar el campo.</small>
                        </div>
                    </div>
                </form>
                <div className="my-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio Unitario ($)</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map( (product) => 
                                <tr>
                                    <th scope="row">{product.name}</th>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                </tr>
                             )}
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td className="fw-bold">TOTAL</td>
                                <td>{total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="my-3">
                    <Link to="/productos">
                        <button type="button" className="btn btn-success btn-sm m-2">
                            Seguir comprando
                        </button>
                    </Link>
                    <Link to="/">
                        <button type="button" className="btn btn-success btn-sm m-2" onClick={executePurchase}>
                            Finalizar proceso.
                        </button>
                    </Link>
                </div>

            </div>

            

        </div>
        
    </div>
  )
}
