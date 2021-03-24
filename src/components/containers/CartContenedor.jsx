import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartList from "../cart/cartList"

const CartContenedor = () => {
    const {carrito, showCart, clearCart, totalAPagar} = useContext(CartContext)


    const limpiarCarrito = () => {
        clearCart();
    }
    
    return (
        <>
            {showCart ? <div>
                <div className="container">
                <CartList carrito={carrito}/>
                </div>
                <div>
                    <h4>Total a pagar: ${totalAPagar}</h4>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => {limpiarCarrito()}}>Vaciar carrito</button>
                     
                    <Link to={`/checkout`}><button className="btn btn-success">Proceder al pago</button></Link>
                </div> 
                
                </div> : 
                <div>
                    <h2>¡No hay items en el carrito!</h2>
                    <p>Vuelva al home para agregar productos</p>
                    
                    <Link to={`/`}><button className="btn btn-success">Volver</button></Link> 
                </div> }
                
        </>
        
        
    )
}

export default CartContenedor