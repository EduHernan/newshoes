import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

let formaCarrito = {border:'2px solid orange', display:'block', marginTop: 10, textAlign: 'center'}

let width ={padding:'15px'}

const Cart = ({detalles}) => {

const {removeItem} = useContext(CartContext);


const handlerRemoveItem = () => {
removeItem(detalles.item.id)
}

return (

<tr style={formaCarrito}>
    <td style={width}>
        <img src={detalles.item.imagen} width='150px' alt='' />
    </td>
    <td style={width}>
        <h2>{detalles.item.nombre}</h2>
    </td>
    <td style={width}>
        <p>Precio: ${detalles.item.precio}</p>
    </td>
    <td style={width}>
        <p>Color: {detalles.item.color}</p>
    </td>
    <td style={width}>
        <p>Cantidad: {detalles.quantity}</p>
    </td>
    <td style={width}>
        <button className="btn btn-danger" onClick={handlerRemoveItem}>Eliminar</button>
    </td>
</tr>



)
}

export default Cart