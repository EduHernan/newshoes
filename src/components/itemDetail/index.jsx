import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import SimuladorBd from "../item/simuladorBd";

const ItemDetail = ({producto}) => {
    const {id} = useParams();

    const [url, setUrl] = useState([])

    useEffect(() => {
        let filtro = SimuladorBd.filter( (elem) => {
            return elem.id.toString() === id 
             
        });
        console.log(filtro)
        setUrl(filtro[0].imagen)

    },[id])

    return (
        <>
        <div>
            
            <h2>{id}</h2>
            <h5>Aca deberá ir el detalle del producto</h5>
            <img src={url} width='400px' alt=''/>
            <h2></h2>
            <p></p>
        </div>
        </>
    )
}

export default ItemDetail;