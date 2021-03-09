import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getFirestore } from "../../firebase"


let detalles = {border:'2px solid orange', display:'inline-block', marginTop: 30, textAlign: 'Center'}
let centrado = {marginLeft: 'auto', marginRight: 'auto', width:'600px'}

const Cart = ({producto}) => {

    
    const {AgregarCarrito, carrito} = useContext(CartContext)

    const finalizarCompra = async() => { 
        //Llamando a la base de datos
        let nuevaOrden = {buyer:{name:'Eduardo Hernandez', email:'hernandez-9193@hotmail.com', phone:'1140606543'}, items:{...carrito}}
        const baseDDatos = getFirestore();
        const ordenesCollection = baseDDatos.collection('ordenes')
        ordenesCollection.add(nuevaOrden)
        console.log({buyer:{name:'Eduardo Hernandez', email:'hernandez-9193@hotmail.com', phone:'1140606543'}, items:{...carrito}})
        console.log(carrito)
    }
   
    
    
    return (
        
        <div>
           
        <h1>Carrito de compras</h1>
        <div style={centrado}>
            <div style={detalles}>
           
                <img src={carrito.imagen} width='400px' alt=''/>
                <h2>{carrito.nombre}</h2>
                <p>precio:{carrito.precio}</p>
                <p>stock:{carrito.stock}</p>
                <p>color:{carrito.color}</p>
                <div>
            <button className="btn btn-danger" onClick={() => AgregarCarrito('No hay productos en el carrito')}>Vaciar carrito</button>
            
            <button className="btn btn-success" onClick= {() => {finalizarCompra()}} >Finalizar compra</button>
        </div> <br/>
                
                 
                
            </div>
           
            
         </div>
        </div>
    
)
}

export default Cart