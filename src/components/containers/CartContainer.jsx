import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Cart from "../cart"

const CartContainer = () => {
    const {carrito} = useContext(CartContext)
    
    
    return (
        <>
        <Cart carrito={carrito}/>
        
        
        </>
    )
}

export default CartContainer