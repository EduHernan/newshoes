import { Link } from "react-router-dom"
import ItemCount from "../itemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"


let lista = {border:'2px solid orange', textAlign:'center', display:'inline-block', marginTop: 10}
let dimensiones = {width:'300px'}

const Items = ({producto}) => {

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

<div className="col-4" style={lista}>
    <Link to={`/item/${producto.id}`}> <img style={dimensiones} src={producto.imagen} 
    alt="" /></Link>
    <h3>{producto.nombre}</h3>
    <h6>Precio: ${producto.precio}</h6>
    <p>Color: {producto.color}</p>
    

    <Link to={`/item/${producto.id}`}> <h6>Ver más</h6>
    </Link>
    {routeCart ?
    <Link to={`/cart`}> <button className="btn btn-success"> Terminar mi compra</button> </Link> :
    <div>
        <ItemCount onAdd={onAdd} contador={contador} sumando={sumando} stock={10} alSacar={alSacar} />
    </div> }

</div>
)

}

export default Items;