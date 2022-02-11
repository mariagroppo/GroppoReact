import { createContext, useState, useContext} from "react";

const cartContext = createContext([]);

export function useCartContext () {return useContext(cartContext)};

export default function CartContextProvider({children}) {
  
    const [cartList, setCartList] = useState([]);

    function agregarItemAlCarrito(item) {
        setCartList( [...cartList, item])
    }

    function vaciarCarrito () {
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
        vaciarCarrito,
        removeItem        
    }} >
            {children}
        </cartContext.Provider>;
    
}
