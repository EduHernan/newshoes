import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CardWidget = () => {

    const {itemsCarrito} = useContext(CartContext);
    

    return (
        <>
        
        <Link to={`/Cart`}>
        
        <img src="/images/carrito.png" width='50px' alt=""/>
        <span className="">{itemsCarrito}</span>
    </Link>
    </>
    )
}



export default CardWidget;