import {useEffect, useState } from "react";

import { getFirestore } from "../../firebase";

import ItemList from "../itemList";


const ItemListContainer = ({greeting}) => {

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
        
        <p className="h1"> {greeting} </p> <br/>
        <ItemList producto={producto}/>
        
        
        </>
    )
}



export default ItemListContainer;
