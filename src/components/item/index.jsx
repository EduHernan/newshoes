import { Link } from "react-router-dom"
import ItemCount from "../itemCount"
import { useState } from "react"


let lista = {border:'2px solid orange', width:'300px', display:'inline-block', marginTop: 30}
let dimensiones = {width:'250px'}

const Items = ({producto}) => {

    const [contador, setContador] = useState(0)

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

   const onAdd = () => {
    console.log('usted agrego', contador, 'productos')
    setRouterCart(true);
}

    return <div style={lista}>
        <img style={dimensiones} src={producto.imagen} alt=""/>
        <h2>{producto.nombre}</h2>
        <p>Precio:{producto.precio}</p>
        <p>Stock:{producto.stock}</p>
        <p>Color:{producto.color}</p>
        <Link to={`/item/${producto.id}`}><p>Ver más</p></Link>
        {routeCart ? <Link to={`/Cart`}> <button className="btn btn-success"> Terminar mi compra</button> </Link> : 
        <div><ItemCount onAdd={onAdd} contador={contador} sumando={sumando} 
        stock={10} alSacar={alSacar} /></div> }
        
    </div>

}

export default Items;
