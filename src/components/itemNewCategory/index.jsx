import { useState } from "react"
import ItemCount from "../itemCount"

let lista = {border:'2px solid orange', width:'300px', display:'inline-block', marginTop: 30,}

const ItemNewCategory = ({details}) => {

    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
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

    return (
        
        <div style={lista}> 
        
        <h3>{details.nombre}</h3>
        <p>Precio:{details.precio}</p>
        <p>Stock:{details.stock}</p>
        <p>Color:{details.color}</p>
        <div><ItemCount contador={contador} onAdd={onAdd} stock={10} alSacar={alSacar} /></div>

    </div>
        

    )
}

export default ItemNewCategory