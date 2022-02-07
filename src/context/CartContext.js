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

    
    return <cartContext.Provider value={{
        cartList,
        agregarItemAlCarrito,
        vaciarCarrito        
    }} >
            {children}
        </cartContext.Provider>;
    
}
