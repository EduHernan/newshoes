import { useEffect, useState } from "react";
import SimuladorBd from "../item/simuladorBd";
import ItemList from "../itemList";

const ItemListContainer = ({greeting}) => {

    const [producto, setProducto] = useState([])

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
        <p className="h1"> {greeting} </p> <br/>
        <ItemList producto={producto}/>
        
        
        </>
    )
}



export default ItemListContainer;
