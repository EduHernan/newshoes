import ItemNewCategory from "../itemNewCategory"

const DetailsItems = ({details}) => {
    return (
        <div>
            <ul>
            {details.map((details) => {
                
                return <ItemNewCategory key={details.id} details={details}/>
                    
            })}
            </ul>
        </div>
    )
}

export default DetailsItems