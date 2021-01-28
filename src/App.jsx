import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

let estilos = {color:'lavender', background:'blue'}

function App() {
  return (
    
    <>
    <Navbar />
    
    <h1 className= "row" style= {estilos}>Hola coders</h1>
    
    </>
    
  );
}

export default App;
