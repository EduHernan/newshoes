import { useEffect, useState } from "react"
import SimuladorDetails from "../item/simuladorDetails"
import DetailsItems from "../itemList/DetailsItems"


const ItemDetailContainer = () => {
    const [details, setDetails] = useState([])
    
    useEffect(() => {
        const GetItems = new Promise ((resolve, reject) => {
            setTimeout (( ) => {
                resolve(SimuladorDetails);
            }, 3000);
        })
    
        GetItems.then (resultado => {
            setDetails(resultado);
        })
    }, [] )
    return (
        <>
            <DetailsItems details={details}/>
        </>
            
    )
    
}

export default ItemDetailContainer