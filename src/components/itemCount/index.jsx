import { Link } from "react-router-dom"

let navbar = {color:'blue', background:'white', display:'inline'}

const ItemCount = ({stock, sumando, contador, alSacar, onAdd}) => {

return (
<>
    <div>
        <button className="btn btn-danger" onClick={alSacar}>-</button>
        <p style={navbar}>{contador}</p>
        <button className="btn btn-success" onClick={()=> {sumando(stock)}} >+</button>
    </div> <br />
    <Link to={`/`}> <button className="btn btn-primary">Volver</button></Link>
    <button onClick={onAdd} className="btn btn-success">Agregar al carrito</button>
</>
)
}

export default ItemCount;