import {useEffect, useState } from "react";
import { useParams } from "react-router";

import { getFirestore } from "../../firebase";

import ItemList from "../itemList";



const ItemListContainer = ({greeting}) => {

const [producto, setProducto] = useState([])
const {categoryID} = useParams()

// Funcion para traer todos los items de la base de datos
useEffect(() => {
const baseDeDatos = getFirestore(); //conexión a la bd
const itemCollection = baseDeDatos.collection('productos'); // Guardando la referencia
itemCollection.get().then (async(value) => {
if (categoryID === undefined) {
let aux = await value.docs.map(elem => {
return {...elem.data(), id:elem.id}
})
setProducto(aux)
}else{
  //Funcion para filtrar por categoría los items
let auxDos = await value.docs.map(prod => {
return {...prod.data(), id:prod.id}

})
let auxTres = auxDos.filter(filt => filt.categoryID === categoryID)

setProducto(auxTres)
}
})
}, [categoryID] )


return (
  <div className='container'>

  <p className="h1"> {greeting} </p> <br />
  <strong>El clásico que se adapta a cualquier look. Encontrá zapatillas de muchos colores
    y estilos para usar todos los días. Zapatillas blancas, negras, de colores.</strong>
  <ItemList producto={producto} />


  </div>
)
}



export default ItemListContainer;