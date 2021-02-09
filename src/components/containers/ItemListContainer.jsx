import { useEffect, useState } from "react";
import SimuladorBd from "../item/simuladorBd";
import ItemCount from "../itemCount";
import ItemList from "../itemList";

const ItemListContainer = ({greeting}) => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        const FirstPromise = new Promise ((resolve, reject) => {
            setTimeout (( ) => {
                resolve(SimuladorBd);
            }, 3000);
        })
    
        FirstPromise.then (resultado => {
            setProducto(resultado);
        })
    }, [] )

    
    
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
        <ItemList producto={producto}/>
        <ItemCount contador={contador} onAdd={onAdd} stock={5} alSacar={alSacar} />
        
        </>
    )
}



export default ItemListContainer;
