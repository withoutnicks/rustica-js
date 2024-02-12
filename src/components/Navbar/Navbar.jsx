import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="img__logo">
          <img src="./logo-lg.png" alt="Logo extendido de Rustica" />
        </div>
        <Link className="btnReserva" to={'/form'}>
          Nueva Reserva
        </Link>
      </nav>
    </>
  )
}