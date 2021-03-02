
import { useContext, useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom"
import { CartContext} from "../../context/CartContext";
import SimuladorBd from "../item/simuladorBd";
import ItemCount from "../itemCount";

let detalles = {border:'2px solid orange', display:'inline-block', marginTop: 30, textAlign: 'Center'}
let centrado = {marginLeft: 'auto', marginRight: 'auto', width:'600px'}

const ItemDetail = ({details}) => {
    const {id} = useParams();
    
    const [url, setUrl] = useState([]);
    

    useEffect(() => {
       
        let filting = SimuladorBd.find ( (elem) => {
            return elem.id.toString() === id
          
            
        });
       
       
        setUrl(filting)
    }, [url, id])

    const [contador, setContador] = useState(1)

    const sumando = (stock) => {
        if (contador < stock) {
            setContador (contador+1);
            
        } else {
            alert ('No tenemos más stock')
           
        }
    }

    const alSacar = () => {
        if (contador > 0) {
            setContador (contador-1);
        } else {
            alert ('No hay items en el carrito')
        }
    }

    const [routeCart, setRouterCart] = useState(false)
    const {carrito, AgregarCarrito} = useContext(CartContext)



    const onAdd = () => {
        console.log('usted agrego', contador, 'productos')
        setRouterCart(true);
        AgregarCarrito({item: url, cantidad: contador})
        
        
       }

      
       
        
       
    


    return (
        <>
          <div style={centrado}>
            <div style={detalles}>
                  <h2>{id}</h2>
           
                <img src={url.imagen} width='400px' alt=''/>
                <h2>{url.nombre}</h2>
                <p>Precio: {url.precio}</p>
                <p>Stock: {url.stock}</p>
                <p>Color: {url.color}</p>
                <p>{url.descripcion}</p>
                 {routeCart ? <Link to={`/Cart`}> <button className="btn btn-success"> Terminar mi compra</button> </Link> : 
                 <div><ItemCount onAdd={onAdd} contador={contador} sumando={sumando} 
                 stock={10} alSacar={alSacar} /></div> } 
                
                 
                
            </div>
           
            
         </div>
            
        
        </>
    )
}

export default ItemDetail;

