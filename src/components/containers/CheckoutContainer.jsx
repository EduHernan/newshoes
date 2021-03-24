import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

const CheckoutContainer = () => {

    //hooks para llamar a los datos del comprador
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [ciudad, setCiudad] = useState('');



    const {carrito, clearCart, totalAPagar} = useContext(CartContext)


    const finalizarCompra = () => { 
        // Agregando info del comprador a la base de datos
        let nuevaOrden = {buyer:{name: name, email: email, phone: phone, ciudad: ciudad}, 
        items:[...carrito], total:totalAPagar}
        const baseDDatos = getFirestore();
        const ordenesCollection = baseDDatos.collection('ordenes')
        ordenesCollection.add(nuevaOrden).then((value) => {
            alert('Gracias por su compra, su orden de compra es: '+value.id);
            console.log(value.id)
        })
        clearCart();

    }

    return (
        <div>
            <h2>Ingrese sus datos</h2>
            <form>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault01">Nombre:</label>
      <input type="text" class="form-control" id="validationDefault01"  required
      onChange={(eve) => {setName (eve.target.value)}}></input>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Apellido:</label>
      <input type="text" class="form-control" id="validationDefault02"  required></input>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail3">Email:</label>
      <input type="email" class="form-control" id="inputEmail3"
      onChange={(eve) => {setEmail (eve.target.value)}}></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Ingrese nuevamente el Email:</label>
      <input type="email" class="form-control" id="inputEmail3"></input>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Ciudad:</label>
      <input type="text" class="form-control" id="validationDefault03"
      onChange={(eve) => {setCiudad (eve.target.value)}} required></input>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Telefono:</label>
      <input type="text" class="form-control" id="validationDefault05"
      onChange={(eve) => {setPhone (eve.target.value)}} required></input>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label class="form-check-label" for="invalidCheck2">
        Todos mis datos son correctos
      </label>
    </div>
  </div>
  <div>
                    <h5>Total a pagar: ${totalAPagar}</h5>
                </div>
  <Link to={`/`}><button class="btn btn-primary"type="submit" 
  onClick= {() => {finalizarCompra()}}>Finalizar compra</button></Link>
  
  
</form>
            
        
        </div>
    )
}

export default CheckoutContainer