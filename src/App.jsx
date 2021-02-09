import './App.css';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/containers/ItemListContainer';


let estilos = {color:'lavender', background:'orangered'}

function App() {
  return (
    
    <>
    <Navbar />
    
    <h1 className= "" style= {estilos}>Tienda de productos</h1>
    <ItemListContainer greeting={'Listado de nuestros productos'} />

    

    

    </>
    
  );
}

export default App;
