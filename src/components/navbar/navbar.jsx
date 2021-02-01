import CardWidget from "./CardWidget";

let estilos = {color:'lavender', background:'orangered', display:'inline', marginLeft:'20px'}

const Navbar = () => {
  return (
    <>
        <nav>
            
        <CardWidget/>
        <h1 style= {estilos}>New Shoes</h1>
            <ul>
                <li><a href="inicio.html">Inicio</a></li>
                <li><a href="productos.html">Productos</a></li>
                <li><a href="recetas.html">Eventos</a></li>
                <li><a href="quienes-somos.html">Quienes somos</a></li>
                <li><a href="contacto.html">Contacto</a></li> 
            </ul>
        </nav>
    </>
  );
}



export default Navbar;
