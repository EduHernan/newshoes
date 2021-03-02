import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const Cart = ({producto}) => {

    
    const {carrito, AgregarCarrito, setCarrito} = useContext(CartContext)
    
    


    return (
        
        <div>
           
        <h1>Carrito de compras</h1>
        <table id="lista-carrito">
                <tbody></tbody>
            </table>
        </div>
    
)
}

export default Cart