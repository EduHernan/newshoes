import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import {CartProvider} from './context/CartContext';
import CheckoutContainer from './components/containers/CheckoutContainer';
import CartContenedor from './components/containers/CartContenedor';
import Footer from './components/footer';


let estilos = {color:'black', background:'lavender', marginLeft:60, marginRight:60}

function App() {
return (

<CartProvider>
  <BrowserRouter>
    <Navbar />

    <h1 style={estilos}>Tienda deportiva online</h1>

    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
      <Route path="/category/:categoryID">
        <ItemListContainer />
      </Route>
      <Route path="/item/:id">
        <ItemDetailContainer />
      </Route>

      <Route path="/cart">
        <CartContenedor />

      </Route>
      <Route path="/checkout">
        <CheckoutContainer />
      </Route>

    </Switch>

    <Footer />
  </BrowserRouter>
</CartProvider>




);
}

export default App;