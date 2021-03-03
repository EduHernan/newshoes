import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const Cart = ({producto}) => {

    
    const {carrito, AgregarCarrito, setCarrito} = useContext(CartContext)
    
    


    return (
        
        <div>
           
        <h1>Carrito de compras</h1>
        <table id="lista-carrito"> <p>test</p>
            <thead>
                <tr>
                <tbody><p>prueba</p></tbody>
                </tr>
            </thead>
                
            </table>
        </div>
    
)
}

export default Cart