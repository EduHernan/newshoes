import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

let margin = {margin:-3}
const CardWidget = () => {

    const {itemsCarrito} = useContext(CartContext);
    

    return (
        <>
        
        <Link to={`/Cart`}>
        
        <img src="/images/carrito.png" width='50px' alt=""/>
        </Link>
    <span style={margin}>{itemsCarrito}</span>
    </>
    )
}



export default CardWidget;