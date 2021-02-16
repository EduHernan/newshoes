import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemDetail from './components/itemDetail';


let estilos = {color:'lavender', background:'orangered'}

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    
    <h1 className= "" style= {estilos}>Tienda de productos</h1>
    
    <Switch>
      <Route exact path="/">
        <ItemListContainer greeting={'Listado de nuestros productos'} />
      </Route>
      <Route path="/item/:id">
        <ItemDetail/>
      </Route>

      
      <Route exact path="/category/:id">
        <ItemDetailContainer/>
      </Route>
      
    </Switch>
    
    

    

    

    </BrowserRouter>
    
  );
}

export default App;
