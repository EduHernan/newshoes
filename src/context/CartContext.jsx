import { createContext, useState } from "react";


//Creando el espacio en memoria
export const CartContext = createContext();


export const CartProvider = ({children}) => {
    // hook del carrito de compras
    const [carrito, setCarrito] = useState([])
    // hook para mostrar o no el carrito si hay productos
    const [showCart, setShowCart] = useState(false)

    // funcion para obtener el indice del item
    const isInCart = (id) => {
        
        return carrito.findIndex(carr => carr.item.id === id)
    }

    //funcion para no generar duplicados en el carrito
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

    // Funcion para borrar el carrito
    const clearCart = () => {
        setCarrito([]);
    };

    // Funcion para remover un item del carrito
    const removeItem = (productoId) => {
        let remove = carrito.filter(remov => remov.item.id !== productoId)
        setCarrito(remove);
    };

    // Funcion que muestra el total a pagar del carrito
    const totalAPagar = carrito.reduce((acum, elem) => {
        return acum = acum + elem.quantity * elem.item.precio;
    }, 0)

    // Funcion que muestra la cantidad de items en el carrito
    const itemsCarrito = carrito.reduce((acum, elem) => {
        return acum = acum + elem.quantity;
    }, 0)

    
    return <CartContext.Provider value={{
        carrito,
        setCarrito,
        AgregarCarrito,
        showCart,
        setShowCart,
        clearCart,
        removeItem,
        totalAPagar,
        itemsCarrito

    }}>
        {children}
        

    </CartContext.Provider>
}

