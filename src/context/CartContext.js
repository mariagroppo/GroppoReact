import { createContext, useState, useContext} from "react";

const cartContext = createContext([]);

export function useCartContext () {return useContext(cartContext)};

export default function CartContextProvider({children}) {
  
    const [cartList, setCartList] = useState([]);

    function agregarItemAlCarrito(item) {
        console.log(item)
        setCartList( [...cartList, item])
        /* setCartList(cartList.push({item})) */
        console.log("   cart list de context")
        console.log(cartList)
        
    }

    return <cartContext.Provider value={{
        cartList,
        agregarItemAlCarrito
    }} >
            {children}
        </cartContext.Provider>;
    
}
