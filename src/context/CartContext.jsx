import { createContext, useEffect, useState } from "react";


//Creando el espacio en memoria
export const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');

    useEffect(() => {
        if (localStorage.getItem('carrito') !== null ) {
            setCarrito(JSON.parse(localStorage.getItem('carrito')))
        }
    },[])

    const AgregarCarrito = (producto) => {
        setCarrito (producto)
        
    }
    insertarProducto()

    function insertarProducto () {
        
       
        carrito.forEach (carrito => {
            const {item, cantidad} = carrito

            const row = document.createElement('tr');
        row.innerHTML = `
        <td> 
            <img src='${item.imagen}' width=150>
        </td> 
        <td>
            ${item.nombre}
        </td>
        <td>
            ${item.precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <button ${item.id} class="borrar-producto btn btn-danger">-</button>
        </td>
        `
        contenedorCarrito.appendChild(row);
        
        })
        guardarStorage();
        
        
        
    }
    

    function borrarHTML () {
        
        contenedorCarrito.innerHTML = '';
    }

    // Agregando Storage al documento
  

    

    insertarProducto();

    function guardarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
    }

    console.log(contenedorCarrito)
    
  
    console.log(carrito)
   
    return <CartContext.Provider value={{
        carrito,
        setCarrito,
        AgregarCarrito
    }}>
        {children}

    </CartContext.Provider>
}

