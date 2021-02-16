import { Link } from "react-router-dom"

let lista = {border:'2px solid orange', width:'300px', display:'inline-block', marginTop: 30}
let dimensiones = {width:'250px'}

const Items = ({producto}) => {
    return <div style={lista}>
        <img style={dimensiones} src={producto.imagen} alt=""/>
        <h2>{producto.nombre}</h2>
        <p>Precio:{producto.precio}</p>
        <p>Stock:{producto.stock}</p>
        <p>Color:{producto.color}</p>
        <Link to={`/item/${producto.id}`}><p>Ver más</p></Link>
    </div>

}

export default Items;
