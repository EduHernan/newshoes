import { useContext, useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom"
import { CartContext} from "../../context/CartContext";
import { getFirestore } from "../../firebase";

import ItemCount from "../itemCount";

let detalles = {border:'2px solid orange', display:'inline-block', marginTop: 30, textAlign: 'Center'}
let centrado = {marginLeft: 'auto', marginRight: 'auto', width:'700px'}

const ItemDetail = () => {
const {id} = useParams();

const [producto, setProducto] = useState([])


//Hook para traer de la base de datos el detalle del item seleccionado
useEffect(() => {
const baseDeDatos = getFirestore(); //conexión a la bd
const itemCollection = baseDeDatos.collection('productos'); // Guardando la referencia
const item = itemCollection.doc(id)

item.get().then(async(value) => {
let aux = await {...value.data(), id:value.id}
setProducto(aux);
})
}, [id])



//Hook para aumentar y disminuir los items en pantalla
const [contador, setContador] = useState(1)

const sumando = (stock) => {
    if (contador < stock) {
        setContador (contador+1);
        
    } else {
        alert ('Lo sentimos, tenemos un límite de 10 unidades por compra')
       
    }
}

const alSacar = (e) => {
if (contador > 1) {
setContador (contador-1);
} else {
e.preventDefault();
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

            <img src={producto.imagen} width='400px' alt='' />
            <h2>{producto.nombre}</h2>
            <h6>Precio: {producto.precio}</h6>
            <p>Stock: {producto.stock}</p>
            <p>Color: {producto.color}</p>
            <p>{producto.descripcion}</p>
            {routeCart ?
            <div>
            <Link to={`/`}> <button className="btn btn-primary">Volver</button></Link>
            <Link to={`/Cart`}> <button className="btn btn-success"> Terminar mi compra</button> </Link> 
            </div> :
            <div>
                <ItemCount onAdd={onAdd} contador={contador} sumando={sumando} stock={10} alSacar={alSacar} />
            </div> }

        </div>


    </div>


</>
)
}

export default ItemDetail;