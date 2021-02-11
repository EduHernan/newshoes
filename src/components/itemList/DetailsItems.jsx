import ItemDetail from "../itemDetail"

const DetailsItems = ({details}) => {
    return (
        <div>
            <ul>
            {details.map((details) => {
                
                return <ItemDetail key={details.id} details={details}/>
                    
            })}
            </ul>
        </div>
    )
}

export default DetailsItems