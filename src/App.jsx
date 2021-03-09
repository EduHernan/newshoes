import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import {CartProvider} from './context/CartContext';
import CartContainer from './components/containers/CartContainer';



let estilos = {color:'lavender', background:'orangered'}

function App(producto) {
  return ( 
   
    <CartProvider>
    <BrowserRouter>
    <Navbar />

    
    <h1 className= "" style= {estilos}>Tienda de productos</h1>
    
    <Switch>
      <Route exact path="/">
        <ItemListContainer greeting={'Listado de nuestros productos'} />
      </Route>
      <Route path="/item/:id">
        <ItemDetailContainer/>
      </Route>

      
      <Route exact Path="/Cart">
        
        <CartContainer/>


      </Route>
      
    </Switch>
    </BrowserRouter>
    </CartProvider>
   
    
    
  );
}

export default App;
