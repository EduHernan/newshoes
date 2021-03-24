let navbar = {color:'red', background:'white', display:'inline'}

const ItemCount = ({stock, sumando, contador, alSacar, onAdd}) => {
    
    return (
        <>
        <div>
            <button className="btn btn-danger" onClick={alSacar}>-</button>
            <p style={navbar}>{contador}</p>
            <button className="btn btn-success" onClick= {() => {sumando(stock)}} >+</button>
        </div> <br/>
        <button onClick={onAdd} className="btn btn-primary">Agregar al carrito</button>
        </>
    )
}

export default ItemCount;