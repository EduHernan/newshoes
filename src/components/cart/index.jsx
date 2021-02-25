import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    const CartContextUse = useContext(CartContext)

    console.log()

    return <h1>Carrito de compras</h1>
}

export default Cart