import Cart from "."

const CartList = ({carrito}) => {
    return (
        <div>
        {carrito.map((detalles) => {
        return <Cart key={detalles.id} detalles={detalles}/>})}
        </div>
    )
}

export default CartList
