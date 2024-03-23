import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="w-36 invert">
          <img src="./logo-lg.webp" alt="Logo extendido de Rustica" />
        </div>
        <Link to={"/form"} className="bg-rus-btn-primary text-white font-semibold flex items-center px-6 py-3 rounded-md" >
          Nueva Reserva
        </Link>
      </nav>
    </>
  )
}