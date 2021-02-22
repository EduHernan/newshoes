import { useEffect, useState } from "react"

import SimuladorBd from "../item/simuladorBd"
import ItemDetail from "../itemDetail"





const ItemDetailContainer = () => {

    


    const [details, setDetails] = useState([])
    
    useEffect(() => {
        const GetItems = new Promise ((resolve, reject) => {
            setTimeout (( ) => {
                resolve(SimuladorBd);
            }, 1000);
        })
    
        GetItems.then (resultado => {
            setDetails(resultado);
        })
    }, [] )
    return (
        <>

        <div>
            <ul>
            
                
            <ItemDetail key={details.id} details={details}/>
            </ul>
        
           </div>
        </>

            
        
            
    )
    
}

export default ItemDetailContainer