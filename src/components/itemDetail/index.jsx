import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import SimuladorBd from "../item/simuladorBd";

const ItemDetail = (producto) => {
    const {id} = useParams();

    const [url, setUrl] = useState(0)

    useEffect(() => {
        console.log(id)
        let filtro = SimuladorBd.filter( (producto) => {
            return producto.id === id 
        });
        console.log(filtro)
        setUrl(filtro.imagen)

    },[id])

    return (
        <>
        <div>
            
            <h2>{id}</h2>
            <h5>Aca deberá ir el detalle del producto</h5>
            <img src={url} alt=""/>
            <h2>{url}</h2>
        </div>
        </>
    )
}

export default ItemDetail;