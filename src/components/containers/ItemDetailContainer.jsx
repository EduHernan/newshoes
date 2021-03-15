import {useEffect, useState } from "react"

import { getFirestore } from "../../firebase"

import ItemDetail from "../itemDetail"





const ItemDetailContainer = () => {

    
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
            <ItemDetail key={producto.id} producto={producto}/>
            </ul>
        
           </div>
        </>

            
        
            
    )
    
}

export default ItemDetailContainer