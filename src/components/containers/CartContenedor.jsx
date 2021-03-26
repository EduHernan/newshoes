import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartList from "../cart/cartList"
import CheckoutContainer from "./CheckoutContainer"

let margin = {marginTop:30, marginBottom:20}

const CartContenedor = () => {

// Trayendo las funciones del context
const {carrito, showCart, clearCart, totalAPagar} = useContext(CartContext)
const [continuarCheckout, setContinuarCheckout] = useState(false)


const limpiarCarrito = () => {
clearCart();
}

// Función para verificar que hayan productos en el carrito antes de pasar al checkout
const existeCarrito = () => {
const existe = carrito.some(carrito => carrito.quantity > 0)
if (existe) {
setContinuarCheckout(true)
} else {
alert('Debe tener al menos 1 producto para ir al checkout')
}
}

return (
<>
    {/* Se muestra el carrito si hay productos, sino da un mensaje */}
    {showCart ? <div className="container">
        <div>
            
            <CartList carrito={carrito} />
        </div>
        <div style={margin}>
            <h4>Total del pedido: ${totalAPagar}</h4>
        </div>
        <div>
            <div>
                {/* Condicional en el que si hay productos te lleva al checkout, 
                sino da un mensaje */}
                {continuarCheckout ?
                <div>
                    <CheckoutContainer />
                </div> :
                <div>
                    <form>
                        <button className="btn btn-danger" onClick={()=> {limpiarCarrito()}}>Vaciar carrito</button>
                        <button className="btn btn-primary" type="submit" onClick={()=> {existeCarrito()}}>Continuar
                            compra</button>
                    </form>


                </div> }
            </div>
        </div>
    </div> :
    <div className="container" style={margin}>
        <h2>¡No hay items en el carrito!</h2>
        <p>Vuelva al home para agregar productos</p>

        <Link to={`/`}> <button className="btn btn-primary">Volver</button></Link>
    </div> }

</>


)
}


export default CartContenedor