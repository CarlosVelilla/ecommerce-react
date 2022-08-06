import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({})

function ShoppingCart({ children }) {
  const [cart, setCart] = useState([])

  return (
    <ShoppingCartContext.Provider value={{cart, setCart}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCart