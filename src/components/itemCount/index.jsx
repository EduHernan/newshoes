
const ItemCount = ({stock, onAdd, contador, alSacar}) => {
    
    return (
        <>
        <button className="btn btn-danger" onClick={alSacar}>-</button>
        <p>{contador}</p>
        <button className="btn btn-success" onClick= {() => {onAdd(stock)}} >+</button>
        <div>
        <button className="btn btn-success">Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount;