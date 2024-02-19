import { Usuarios } from './Usuarios'; 
import './cliente.css';

export const Cliente = () => { 
 return (
    <>
       <section className="container__cliente">
       <Usuarios 
         nomb="Cliente"
         nombreUsuario="Lucho"
         fechaReserva="12/05/2024"
         infoPlato="Ceviche"
         cantidadPersonas="4"
        />
        <Usuarios
        nomb="Cliente"
        nombreUsuario="Edwar"
        fechaReserva="15/05/2024"
        infoPlato="Ceviche"
        cantidadPersonas="4"
       />
        </section>
    </>
  )
}