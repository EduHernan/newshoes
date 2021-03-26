import Items from "../item"

const ItemList = ({producto}) => {


return (

<>
    <div className='row'>
        {producto.map((producto) => {


        return <Items key={producto.id} producto={producto} />


        })}
    </div>
</>




)
}

export default ItemList