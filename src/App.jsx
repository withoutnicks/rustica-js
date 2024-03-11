import { Aboutus } from "./components/AboutUs";
import { Divider } from "./components/Divider";
import { Link } from "react-router-dom";
import { Platos } from "./components/Platos";

// eslint-disable-next-line no-unused-vars
import { app } from "./firebase/firebase";

function App() {

  return (
    <>
      <main className="mx-auto max-w-4xl font-sans">
        <nav className="flex justify-between items-center px-8 py-6">
          <div className="w-36">
            <img src="./logo-lg.webp" alt="Logo extendido de Rustica" />
          </div>
          <Link to={"/login"} className="bg-gray-900 text-white font-semibold h-10 flex items-center px-6 py-2 rounded-md">
            Iniciar Sesion
          </Link>
        </nav>
        <hr />
        <Divider titleDivider="Sobre Nosotros" />
        <Aboutus />
        <Divider titleDivider="Nuestros platos" />
        <Platos />
      </main>
    </>
  );
}

export default App;
