import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

let estilos = {color:'lavender', background:'orangered', display:'inline', marginLeft:'20px'}
let navbar = {color:'red', background:'white', display:'inline', marginLeft:'20px'}

const Navbar = () => {
  return (
    <>
        <nav>
          <Link to={`/`}>
            <CardWidget/>
            <h1 style= {estilos}>New Shoes</h1>
          </Link>
          <ul>
                <li style= {navbar}><a href="inicio.html">Inicio</a></li>
                <li style= {navbar}><a href="productos.html">Productos</a></li>
                <li style= {navbar}><a href="quienes-somos.html">Quienes somos</a></li>
                <li style= {navbar}><a href="contacto.html">Contacto</a></li> 
                <Link to={`/Cart`}><li style= {navbar}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></li></Link> 
            </ul>
        </nav>
    </>
  );
}



export default Navbar;
