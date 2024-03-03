import { Aboutus } from "../components/AboutUs";
import { Divider } from "../components/Divider";
import { Navbar } from "../components/Navbar";
import { Platos } from "../components/Platos";
import { Reservas } from "../components/Reservas";

function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-4xl font-sans">
        <Navbar />
        <hr />
        <Reservas />
        <Divider titleDivider="Nuestros platos" />
        <Platos />
        <Divider titleDivider="Sobre Nosotros" />
        <Aboutus />
      </main>
    </>
  );
}

export default HomePage;
