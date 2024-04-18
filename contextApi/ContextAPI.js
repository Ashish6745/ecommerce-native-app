import React, { createContext, useState } from 'react'


export const CartContext = createContext();


const ContextAPI = ({children}) => {
    const[cart, setCart] = useState([]);
    const[mobile, setMobile] = useState([])
    const[tab, setTab] = useState([])
  return (
   <CartContext.Provider value={{cart,setCart,mobile, setMobile,tab,setTab}}>
   {children}
   </CartContext.Provider>

  )
}

export default ContextAPI