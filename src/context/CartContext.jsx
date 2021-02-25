import { createContext, useState } from "react";


//Creando el espacio en memoria
export const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const AgregarCarrito = (url) => {
        setCarrito (url)
        
    }
  
    console.log(carrito)
   
    return <CartContext.Provider value={{
        carrito,
        setCarrito,
        AgregarCarrito
    }}>
        {children}

    </CartContext.Provider>
}

