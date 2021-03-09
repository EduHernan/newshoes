import { createContext, useState } from "react";


//Creando el espacio en memoria
export const CartContext = createContext();


export const CartProvider = ({children}) => {
    

    document.addEventListener('DOMContentLoaded', () => {
        let articulos = carrito;
        
        articulos = JSON.parse(localStorage.getItem('carrito')) || [];
        console.log(articulos)

        
    })

    const [carrito, setCarrito] = useState([])

    
    

    

    const AgregarCarrito = (producto) => {
        setCarrito (producto)
        
    }

    /* const addItem = (producto) => {
        if (!isInCart (producto.id)) {
            const newCart = [...carrito, producto];
            setCarrito(newCart)
        }
    }

    console.log(addItem)

    const isInCart = (id) => {
        
        return carrito.findIndex(carr => carr.id === carrito.id) === 0 ? true:false;
    }
    console.log(isInCart) */
    

   

    
    

    
  
    // function almacenamiento() {
    // localStorage.setItem('carrito', JSON.stringify(carrito))}

    
  
    console.log(carrito)
   
    return <CartContext.Provider value={{
        carrito,
        setCarrito,
        AgregarCarrito
    }}>
        {children}
        

    </CartContext.Provider>
}

