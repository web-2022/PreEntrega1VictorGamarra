import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3> Tienda</h3>
            <div>
                <p>Nosotros</p>
                <p>Servicios</p>
                <p>Blog</p>
                <p>Casos de éxitos</p>
                <p>Ruta de apredizaje</p>
                <p>Contacto</p>

            </div>

            <CartWidget/>
            
               
        </nav>
    )
}

export default NavBar