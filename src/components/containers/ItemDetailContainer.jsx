import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { getFirestore } from "../../firebase"
import Cart from "../cart"

import ItemDetail from "../itemDetail"





const ItemDetailContainer = () => {

    const {carrito, AgregarCarrito, setCarrito} = useContext(CartContext)
    
    const [producto, setProducto] = useState([])
    

    useEffect(() => {
        const baseDeDatos = getFirestore(); //conexión a la bd
        const itemCollection = baseDeDatos.collection('productos'); // Guardando la referencia
        itemCollection.get().then((value) => {
            let aux = value.docs.map(elem => {
                return {...elem.data(), id:elem.id}
            })
            setProducto(aux);
        })
    }, [] )
    
    
    return (
        <>

        <div>
            <ul>
            
            <Cart carrito={carrito}/>
            <ItemDetail key={producto.id} producto={producto}/>
            </ul>
        
           </div>
        </>

            
        
            
    )
    
}

export default ItemDetailContainer