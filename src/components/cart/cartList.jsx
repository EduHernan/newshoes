import { Link } from "react-router-dom"
import Cart from "."

const CartList = ({carrito}) => {
return (
<>
    <div>
        {carrito.map((detalles) => {

        return <Cart key={detalles.item.id} detalles={detalles} />})}
    </div>
    <div>
        <Link to={`/`}> <button className="btn btn-primary">Seguir Comprando</button></Link>


    </div>
</>
)
}

export default CartList