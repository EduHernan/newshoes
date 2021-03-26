import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from 'firebase/app'
import '@firebase/firestore'
import Checkout from "../checkout";


const CheckoutContainer = () => {

//hooks para guardar los datos del comprador
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [ciudad, setCiudad] = useState('');

//hook para guardar el número de orden
const [orden, setOrden] = useState('')

// Trayendo las funciones del context
const {carrito, clearCart, totalAPagar} = useContext(CartContext)
const [finalCheckout, setFinalCheckout] = useState(false)

// Función para verificar que se hayan registrado todos los datos antes de hacer la compra
const finalizarCompra = async () => {
const existeCantidad = carrito.some(carrito => carrito.quantity > 0)
const existeEmail = email.includes('@')

if (existeEmail && existeCantidad) {
// Agregando info del comprador a la base de datos
setFinalCheckout(true)
let nuevaOrden = {buyer:{name: name, email: email, phone: phone, ciudad: ciudad},
items:[...carrito], total:totalAPagar,
date: firebase.firestore.Timestamp.fromDate(new Date())}
const baseDDatos = getFirestore();
const ordenesCollection = await baseDDatos.collection('ordenes')
ordenesCollection.add(nuevaOrden).then((value) => {
const valorId = value.id
setOrden(valorId)
console.log(value.id)
})
clearCart();
} else {
alert('Por favor verifique sus productos y sus datos')
}
}


return (
<>
  {finalCheckout ? <div>
    <Checkout orden={orden} />
  </div> :
  <div>
    <h2>Ingrese sus datos</h2>
    <form>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationDefault01">Nombre:</label>
          <input type="text" class="form-control" id="validationDefault01" required 
          onChange={(eve)=> {setName(eve.target.value)}}></input>
        </div>
        <div class="col-md-6 mb-3">
          <label for="validationDefault02">Apellido:</label>
          <input type="text" class="form-control" id="validationDefault02" required></input>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail3">Email:</label>
          <input type="email" class="form-control" id="inputEmail3" onChange={(eve)=> {setEmail
          (eve.target.value)}}></input>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Ingrese nuevamente el Email:</label>
          <input type="email" class="form-control" id="inputEmail3"></input>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationDefault03">Ciudad:</label>
          <input type="text" class="form-control" id="validationDefault03" onChange={(eve)=> {setCiudad
          (eve.target.value)}} required></input>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault05">Telefono:</label>
          <input type="text" class="form-control" id="validationDefault05" onChange={(eve)=> {setPhone
          (eve.target.value)}} required></input>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
          <label class="form-check-label" for="invalidCheck2">
            Los datos ingresados son correctos
          </label>
        </div>
      </div>
      <div>
        <h5>Total a pagar: ${totalAPagar}</h5>
      </div>
      <button class="btn btn-primary" type="submit" 
      onClick={()=> {finalizarCompra()}}>Finalizar compra</button>


    </form>
  </div>
  }
</>
)
}

export default CheckoutContainer