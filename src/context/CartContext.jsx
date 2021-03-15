import { createContext, useState } from "react";


//Creando el espacio en memoria
export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [showCart, setShowCart] = useState(false)

    const isInCart = (id) => {
        
        return carrito.findIndex(carr => carr.item.id === id)
    }

    const AgregarCarrito = (producto) => {
        let estaCarrito = isInCart(producto.item.id)
        if (estaCarrito === -1) {
            setCarrito([...carrito, producto])
        } else {
            let nuevoProducto = {...carrito[estaCarrito], quantity: carrito[estaCarrito].quantity + producto.quantity}
            let listaCarrito = carrito.filter (prod => producto.item.id !== prod.item.id)
            setCarrito ([...listaCarrito, nuevoProducto])
        }
        
    }
  

    /* const AgregarCarrito = (producto) => {
        if (!isInCart (producto.id)) {
            const newCart = [...carrito, producto];
            setCarrito(newCart)
        }
    }

    console.log(addItem)

    const isInCart = (id) => {
        
        return carrito.findIndex(carr => carr.id === carrito.id) === 0 ? true:false;
    }
    console.log(isInCart)
    
    document.addEventListener('DOMContentLoaded', () => {
        let articulos = carrito;
        
        articulos = JSON.parse(localStorage.getItem('carrito')) || [];
        console.log(articulos)

        
    })
    
    */
    

   

    
    

    
  
    // function almacenamiento() {
    // localStorage.setItem('carrito', JSON.stringify(carrito))}

    
  
    console.log(carrito)
   
    return <CartContext.Provider value={{
        carrito,
        setCarrito,
        AgregarCarrito,
        showCart,
        setShowCart
    }}>
        {children}
        

    </CartContext.Provider>
}

