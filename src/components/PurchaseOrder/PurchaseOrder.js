import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import swal from 'sweetalert';
import { collection, getFirestore, addDoc, query, documentId, getDocs, where, writeBatch} from 'firebase/firestore'
import './PurchaseOrder.css';
import { useState } from "react";

export default function PurchaseOrder() {
    const {cartList, emptyCart} = useCartContext();
    const [paid, setPaid]=useState(false);
    const [clientData, setClientData] = useState({
        clientName:"",
        clientMail:"",
        clientPhone:""
    })
    const [nameValidation,setNameValidation] = useState(false);
    const [phoneValidation,setPhoneValidation] = useState(false);
    const [mailValidation,setMailValidation] = useState(false);
    
    let total=0;
    cartList.forEach( (product) => {
        total=total + parseFloat(product.price * product.quantity);
    } )
    
    const handleInputChange = (e) => {
        setClientData ({
            ...clientData,
            [e.target.name] : e.target.value
        })
        if (e.target.name === "clientName") {
            if (e.target.value.length > 0 && e.target.value.length < 30 ) {
                setNameValidation(true);
            } else {
                setNameValidation(false);
            }
        } else if (e.target.name === "clientPhone") {
            if (e.target.value.length >= 11 && e.target.value.length < 15 ) {
                setPhoneValidation(true);
            } else {
                setPhoneValidation(false);
            }
        } else if (e.target.name === "clientMail") {
            if (e.target.value.length > 5 && e.target.value.length < 30 ) {
                setMailValidation(true);
            } else {
                setMailValidation(false);
            }
        }       
    }
    
    const executePurchase = async (e) => {
        cartList.length === 0 ? 
            console.log("Carrito vacio.")
        :
            e.preventDefault();    
            if (nameValidation === true && phoneValidation === true && mailValidation === true) {
                let order = {};
                order.buyer = {name:clientData.clientName, email:clientData.clientMail, phone:clientData.clientPhone};
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
                const db=getFirestore();
                const ordersCollection = collection (db, 'orders');
                await addDoc (ordersCollection, order)
                    .then (res => {
                        let purchaseCode = res.id
                        swal("C??digo de su compra: " + purchaseCode + ". Su pedido estar?? listo para ser retirado en 24hs.");
                    });
                emptyCart();
                setPaid(true);
    
                /* ----------------------- Actualizacion de stock en Firebase ---------------------*/
                const queryCollection = collection (db, 'items')
                const updateStock = query (
                    queryCollection,
                    where ( documentId(), "in", cartList.map ( it => it.id ) )
                )
                const batch = writeBatch(db);
                await getDocs(updateStock)
                    .then( resp => resp.docs.forEach( res => batch.update (res.ref, {
                        stock: res.data().stock - cartList.find( item => item.id === res.id).quantity
                    } )) )
                    .catch (err => console.log(err))
                    .finally( () => console.log("Stock actualizado."))
                batch.commit();
            } else {
                swal("Todos los campos deben estar correctamente completos.")
            }
    }
    return (
    <div>
        { paid === true ?
            <Link to="/">
                <button type="button" className="btn btn-success btn-sm m-4 fs-3">
                    Volver al inicio...
                </button>
            </Link>
        :
        <div className="container">
            <h2 className="justify-content-center mb-3 my-3">Orden de compra</h2>
            <div className="col">
                <form className="row">
                    <div className="form-group col-sm-6">
                        <label type="text" className="col-form-label">Nombre completo</label>
                        <div>
                            <input type="text" className="form-control" name="clientName" placeholder="Ingresa tu nombre" onChange={handleInputChange}/>
                            <small className={` ${nameValidation === true ? 'DoNotShowName' : 'showName'}`}> *Por favor completar el campo (M??x. 30 caracteres.).</small>
                        </div>
                    </div>
                    <div className="form-group col-sm-6">
                        <label type="phone" className="col-form-label">Tel??fono</label>
                        <div>
                            <input type="number" className="form-control" name="clientPhone" placeholder="Ingresa tu tel??fono" onChange={handleInputChange}/>
                            <small className={` ${phoneValidation === true ? 'DoNotShowPhone' : 'showPhone'}`}> *Por favor completar el campo (entre 11 y 15 caracteres).</small>
                        </div>
                    </div>
                    <div className="form-group col-sm-6">
                        <label type="email" className="col-form-label">Correo</label>
                        <div>
                            <input type="email" className="form-control" name="clientMail" placeholder="Ingresa tu correo" onChange={handleInputChange}/>
                            <small className={` ${mailValidation === true ? 'DoNotShowMail' : 'showMail'}`}> *Por favor completar el campo (M??x. 30 caracteres).</small>
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
                                <tr key={product.id}>
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
                    <button type="button" className="btn btn-success btn-sm m-2" onClick={executePurchase}>
                        Finalizar proceso.
                    </button>
                </div>
            </div>
        </div>
        }
    </div>
  )
}
