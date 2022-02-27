import { createContext, useState, useContext} from "react";
import swal from 'sweetalert';

const cartContext = createContext([]);

export function useCartContext () {return useContext(cartContext)};

export default function CartContextProvider({children}) {
  
    const [cartList, setCartList] = useState([]);
    const [quantityElements, setQuantityElements] = useState(0);

    function agregarItemAlCarrito(item, stock) {
        let condition = true;
        cartList.forEach ( (prod) => {
            if (condition) {
                if (item.id === prod.id) {
                    condition=false
                }
            }
        })
        
        if (condition) {
            setCartList( [...cartList, item]);
            swal("Producto agregado al carrito.");
            quantityElementsCart(item.quantity);
        } else {
            let newCartList = cartList;
            let index = newCartList.findIndex ( prod => prod.id === item.id);
            let available = stock - newCartList[index].quantity;
            let possible = available - item.quantity;
            if (available > 0) {
                if (possible >= 0) {
                    newCartList[index].quantity = newCartList[index].quantity + item.quantity;
                    setCartList( newCartList );
                    swal("Producto ya agregado. Se sumaron " + item.quantity + " unidades al carrito.");
                    quantityElementsCart(item.quantity);
                } else {
                    swal("Solo quedan " + available + " unidades disponibles.");
                }
            } else {
                swal("No hay unidades disponibles del producto seleccionado.");
            }
        } 
    }

    function emptyCart () {
        setCartList([]);
        setQuantityElements(0);
    }

    function removeItem (id) {
        const index = cartList.findIndex(item => item.id === id)
        if (index>=0) {
            let newCart=cartList.filter((item => item.id !== id));
            setCartList(newCart);
            let valor = 0;
            newCart.map( i => valor = valor + i.quantity);
            setQuantityElements(valor);
        }
    }
    
    function quantityElementsCart (value) {
        setQuantityElements(quantityElements+value);
    }

    return <cartContext.Provider value={{
        cartList,
        quantityElements,
        agregarItemAlCarrito,
        emptyCart,
        removeItem,
        quantityElementsCart        
    }} >
            {children}
        </cartContext.Provider>;
    
}
