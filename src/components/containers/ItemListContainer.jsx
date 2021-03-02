import {useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../cart";
import SimuladorBd from "../item/simuladorBd";
import ItemList from "../itemList";

const ItemListContainer = ({greeting}) => {

    const [producto, setProducto] = useState([])
    
    const {carrito, AgregarCarrito, setCarrito} = useContext(CartContext)

   
    

    useEffect(() => {
        const FirstPromise = new Promise ((resolve, reject) => {
            setTimeout (( ) => {
                resolve(SimuladorBd);
            }, 1000);
        })
    
        FirstPromise.then (resultado => {
            
            setProducto(resultado);
            
            
            
        })
    }, [] )


    return (
        <>
        <Cart producto={producto}/>
        <p className="h1"> {greeting} </p> <br/>
        <ItemList producto={producto}/>
        
        
        </>
    )
}



export default ItemListContainer;
