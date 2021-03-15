import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getFirestore } from "../../firebase"
import CartList from "../cart/cartList"

const CartContainer = () => {
    const {carrito, AgregarCarrito, showCart} = useContext(CartContext)

    const finalizarCompra = async() => { 
        //Llamando a la base de datos
        let nuevaOrden = {buyer:{name:'Eduardo Hernandez', email:'hernandez-9193@hotmail.com', phone:'1140606543'}, items:[...carrito]}
        const baseDDatos = getFirestore();
        const ordenesCollection = baseDDatos.collection('ordenes')
        ordenesCollection.add(nuevaOrden).then((value) => {
            alert('Gracias por su compra, su orden es '+value.id);
            console.log(value.id)
        })
        
    }
    

    return (
        <>
            {showCart ? <div>
                <div>
                <CartList carrito={carrito}/>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => AgregarCarrito('No hay productos en el carrito')}>Vaciar carrito</button>
            
                    <button className="btn btn-success" onClick= {() => {finalizarCompra()}} >Finalizar compra</button>
                </div> 
                </div> : 
                <div><h1>No hay items en el carrito</h1></div> }
                
        </>
        
        
    )
}

export default CartContainer