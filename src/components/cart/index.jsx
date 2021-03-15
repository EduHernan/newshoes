
let formaCarrito = {border:'2px solid orange', display:'inline-block', marginTop: 30, textAlign: 'Center'}
let centrado = {marginLeft: 'auto', marginRight: 'auto', width:'600px'}

const Cart = ({detalles}) => {
    
    return (
        
        <div>
        <div style={centrado}>
            <div style={formaCarrito}>
           
                <img src={detalles.item.imagen} width='200px' alt=''/>
                <h2>{detalles.item.nombre}</h2>
                <p>precio:{detalles.item.precio}</p>
                <p>stock:{detalles.item.stock}</p>
                <p>color:{detalles.item.color}</p>
                <p>cantidad:{detalles.quantity}</p>
            </div>
           
            
         </div>
        </div>
    
)
}

export default Cart