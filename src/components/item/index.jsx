let lista = {border:'2px solid orange', width:'300px', display:'inline-block', marginTop: 30}

const Items = ({producto}) => {
    return <div style={lista}>
        <h2>{producto.nombre}</h2>
        <p>Precio:{producto.precio}</p>
        <p>Stock:{producto.stock}</p>
        <p>Color:{producto.color}</p>
    </div>

}

export default Items;
