import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

let estilos = {color:'black', background:'lavender', display:'inline', marginLeft:'20px'}
let navbar = {color:'red', background:'white', display:'inline', marginLeft:'20px'}

const Navbar = (producto) => {
  return (
    <>
        <nav>
          
          <Link to={`/`}>
          <img src="/images/good_shoes.jpg" width='150px' alt=""/>
           
            <h1 style= {estilos}>New Shoes</h1>
          </Link>
          <ul>
          
                <li style= {navbar}><Link to={`/`}>Home</Link></li>
                <li style= {navbar}><Link to={`/category/${'nike'}`}>Nike</Link></li>
                <li style= {navbar}><Link to={`/category/adidas`}>Adidas</Link></li>
                <li style= {navbar}><Link to={`/category/fila`}>Fila</Link></li>
                <li style= {navbar}><Link to={`/category/puma`}>Puma</Link></li>
                <li style= {navbar}><CardWidget/> </li>
                
            </ul>
        </nav>
    </>
  );
}



export default Navbar;
