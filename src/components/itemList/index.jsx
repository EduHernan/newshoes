import Items from "../item"

const ItemList = ({producto}) => {
    return (
        <div>
            <ul>
            {producto.map((producto) => {
                
                return <Items key={producto.id} producto={producto}/>
                    
            })}
            </ul>
        </div>
    )
}

export default ItemList