import {useEffect, useState } from "react";
import { useParams } from "react-router";

import { getFirestore } from "../../firebase";

import ItemList from "../itemList";



const ItemListContainer = ({greeting}) => {

    const [producto, setProducto] = useState([])
    const {categoryID} = useParams()
    

    useEffect(() => {
        const baseDeDatos = getFirestore(); //conexión a la bd
        const itemCollection = baseDeDatos.collection('productos'); // Guardando la referencia
        itemCollection.get().then((value) => {
            if (categoryID === undefined) {
               let aux = value.docs.map(elem => {
                 return {...elem.data(), id:elem.id}
               })
               setProducto(aux)
             }else{
               let auxDos = value.docs.map(prod => {
                 return {...prod.data(), id:prod.id}
                 
                
               })
               console.log(auxDos)
               let auxTres = auxDos.filter(filt => filt.categoryID === categoryID)
               
               setProducto(auxTres)
               console.log(auxTres)
             }
            })
    }, [categoryID] )
    
    
    
    
    
    

    

    return (
        <>
        
        
        <p className="h1"> {greeting} </p> <br/>
        <strong>El clásico que se adapta a cualquier look. Encontrá zapatillas de muchos colores 
          y estilos para usar todos los días. Zapatillas blancas, negras, de colores.</strong>
        <ItemList producto={producto}/>
        
        
        
        </>
    )
}



export default ItemListContainer;
