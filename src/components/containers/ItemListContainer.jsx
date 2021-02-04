import { useState } from "react";
import ItemCount from "../itemCount";

const ItemListContainer = ({greeting}) => {
    
    const [contador, setContador] = useState(0)

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
        <>
        <a className="h1"> {greeting} </a> <br/>
        <ItemCount contador={contador} onAdd={onAdd} stock={5} alSacar={alSacar} />
        
        </>
    )
}



export default ItemListContainer;
