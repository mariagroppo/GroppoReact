import { createContext, useState, useContext} from "react";
import swal from 'sweetalert';

const cartContext = createContext([]);

export function useCartContext () {return useContext(cartContext)};

export default function CartContextProvider({children}) {
  
    const [cartList, setCartList] = useState([]);

    function agregarItemAlCarrito(item) {
                
        let condition = true;
        cartList.forEach ( (prod) => {
            if (condition) {
                if (item.id === prod.id) {
                    condition=false
                }
            }
        })
        
        if (condition) {
            setCartList( [...cartList, item])
            swal("Producto agregado al carrito.")
            
        } else {
            let index = cartList.findIndex ( prod => prod.id === item.id) 
            cartList[index].quantity = cartList[index].quantity + item.quantity
            swal("Producto ya agregado. Se sumaron " + item.quantity + " unidades al carrito.");     
        } 
    }

    function emptyCart () {
        setCartList([]);
    }

    function removeItem (id) {
        const index = cartList.findIndex(item => item.id === id)
        if (index>=0) {
            setCartList(cartList.filter((item => item.id !== id)))
        }
    }
    
    return <cartContext.Provider value={{
        cartList,
        agregarItemAlCarrito,
        emptyCart,
        removeItem        
    }} >
            {children}
        </cartContext.Provider>;
    
}
