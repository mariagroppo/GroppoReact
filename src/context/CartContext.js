import { createContext, useState, useContext} from "react";

const cartContext = createContext([]);

export function useCartContext () {return useContext(cartContext)};

export default function CartContextProvider({children}) {
  
    const [cartList, setCartList] = useState([]);

    function agregarItemAlCarrito(item) {
        setCartList( [...cartList, item])
    }

    return <cartContext.Provider value={{
        cartList,
        agregarItemAlCarrito
    }} >
            {children}
        </cartContext.Provider>;
    
}
