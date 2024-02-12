import './App.css'
import { Aboutus } from './components/AboutUs/AboutUs'
import { Divider } from './components/Divider/Divider'
import { Navbar } from './components/Navbar/Navbar'
import { Platos } from './components/Platos/Platos'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <hr />
        <Divider titleDivider="Nuestros platos" />
        <Platos />
        <Divider titleDivider="Sobre Nosotros" />
        <Aboutus />
      </main>
    </>
  )
}

export default App
