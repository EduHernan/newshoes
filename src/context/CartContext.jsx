import { createContext, useEffect, useState } from "react";


//Creando el espacio en memoria
export const CartContext = createContext();


export const CartProvider = ({children}) => {
    

    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    document.addEventListener('DOMContentLoaded', () => {
        let articulos = carrito;
        
        articulos = JSON.parse(localStorage.getItem('carrito')) || [];
        console.log(articulos)

        insertarProducto();
        
    })

    const [carrito, setCarrito] = useState([])
    

    

    const AgregarCarrito = (producto) => {
        setCarrito (producto)
        
    }

    
       
    insertarProducto();
    
    function insertarProducto () {
       
        carrito.forEach (carrito => {
            const {imagen, nombre, precio, id} = carrito

            const row = document.createElement('tr');
        row.innerHTML = `
        <td> 
            <img src='${imagen}' width=150>
        </td> 
        <td>
            ${nombre}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            <button ${id} class="borrar-producto btn btn-danger">-</button>
        </td>
        `
        contenedorCarrito.appendChild(row);
        
        almacenamiento();
        
        })
        
        
    }

    
    

    function borrarHTML() {
        const eliminador = contenedorCarrito
        eliminador.innerHTML = '';
        }
    

    // Agregando Storage al documento
  
    function almacenamiento() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
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

