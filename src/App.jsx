import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';

import Cart from './components/cart';


let estilos = {color:'lavender', background:'orangered'}

function App(parametros) {
  return (
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
        <Cart/>

      </Route>
      
    </Switch>
    
    

    

    

    </BrowserRouter>
    
  );
}

export default App;
