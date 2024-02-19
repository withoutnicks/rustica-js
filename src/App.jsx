import './App.css'
import { Aboutus } from './components/AboutUs/AboutUs'
import { Divider } from './components/Divider/Divider'
import { Navbar } from './components/Navbar/Navbar'
import { Platos } from './components/Platos/Platos'
import { Reservas } from './components/Reservas/Reservas'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <hr />
        <Reservas />
        <Divider titleDivider="Nuestros platos" />
        <Platos />
        <Divider titleDivider="Sobre Nosotros" />
        <Aboutus />
      </main>
    </>
  )
}

export default App
