import { useEffect, useState } from "react";
import { Aboutus } from "../components/AboutUs";
import { Divider } from "../components/Divider";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Platos } from "../components/Platos";
import { Reservas } from "../components/Reservas";
import { currentUser } from "../firebase/auth";

async function getUser() {
  const username = await currentUser();
  return username;
}

function HomePage() {
  const [userName, setUserUid] = useState(null);

  useEffect(() => {
    async function fetchUid() {
      const user = await getUser();
      setUserUid(user);
    }
    fetchUid();
  }, []);

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
        <Footer uid={userName} />
      </main>
    </>
  );
}

export default HomePage;
