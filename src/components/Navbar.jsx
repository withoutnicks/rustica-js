import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="w-36">
          <img src="./logo-lg.webp" alt="Logo extendido de Rustica" />
        </div>
        <Link className="bg-gray-900 text-white font-semibold h-10 flex items-center px-6 py-2 rounded-md" to={'/form'}>
          Nueva Reserva
        </Link>
      </nav>
    </>
  )
}