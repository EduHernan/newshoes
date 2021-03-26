import { Link } from "react-router-dom"

let checkout = {border:'3px solid lavender', marginTop: 30, textAlign: 'center'}
let centrado = {marginLeft: 'auto', marginRight: 'auto', width:'700px'}
const Checkout = (orden) => {
return (
<>

    <div style={centrado}>
        <div style={checkout}>
        <img width='200' src='/images/visto-bueno.jpg' alt="" />
        <h1>¡Gracias por su compra! </h1>
        <h5>su numero de orden es: {orden.orden} </h5>
        <p>Hemos enviado un mail a su correo con información de la compra</p>
        <Link to={`/`}> <button className="btn btn-success">Aceptar</button></Link>
        </div>


    </div>
</>
)
}

export default Checkout