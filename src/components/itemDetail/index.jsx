
import { useContext, useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom"
import { CartContext} from "../../context/CartContext";
import { getFirestore } from "../../firebase";

import ItemCount from "../itemCount";

let detalles = {border:'2px solid orange', display:'inline-block', marginTop: 30, textAlign: 'Center'}
let centrado = {marginLeft: 'auto', marginRight: 'auto', width:'600px'}

const ItemDetail = () => {
    const {id} = useParams();

    const [producto, setProducto] = useState([])
    
    

    useEffect(() => {
        const baseDeDatos = getFirestore(); //conexión a la bd
        const itemCollection = baseDeDatos.collection('productos'); // Guardando la referencia
        const item = itemCollection.doc(id)
        item.get().then((value) => {
            let aux = value.data()
            setProducto(aux);
        })
    }, [id])
    
    

    const [contador, setContador] = useState(1)

    const sumando = (stock) => {
        if (contador < stock) {
            setContador (contador+1);
            
        } else {
            alert ('No tenemos más stock')
           
        }
    }

    const alSacar = () => {
        if (contador > 0) {
            setContador (contador-1);
        } else {
            alert ('No hay items en el carrito')
        }
    }

    const [routeCart, setRouterCart] = useState(false)
    const {AgregarCarrito, setShowCart} = useContext(CartContext)



    const onAdd = () => {
        setRouterCart(true);
        AgregarCarrito({item: producto, quantity:contador});
        setShowCart(true)
        
        
        
       }

      
    return (
        <>
          <div style={centrado}>
            <div style={detalles}>
           
                <img src={producto.imagen} width='400px' alt=''/>
                <h2>{producto.nombre}</h2>
                <p>Precio: {producto.precio}</p>
                <p>Stock: {producto.stock}</p>
                <p>Color: {producto.color}</p>
                <p>{producto.descripcion}</p>
                 {routeCart ? <Link to={`/Cart`}> <button className="btn btn-success"> Terminar mi compra</button> </Link> : 
                 <div><ItemCount onAdd={onAdd} contador={contador} sumando={sumando} 
                 stock={10} alSacar={alSacar} /></div> } 
                
                 
                
            </div>
           
            
         </div>
            
        
        </>
    )
}

export default ItemDetail;

