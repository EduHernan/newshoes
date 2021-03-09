import {useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import Cart from "../cart";
import ItemList from "../itemList";

const ItemListContainer = ({greeting}) => {

    const [producto, setProducto] = useState([])
    const {carrito, AgregarCarrito, setCarrito} = useContext(CartContext)
    
   

    
    

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
        <Cart carrito={carrito}/>
        <p className="h1"> {greeting} </p> <br/>
        <ItemList producto={producto}/>
        
        
        </>
    )
}



export default ItemListContainer;
