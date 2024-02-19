import { CardReserva } from './CardReserva'; 
import './Reservas.css';

export const Reservas = () => { 
 return (
    <>
       <section className="container__reservas">
       <CardReserva 
         numRes="85621437"
         fechaReserva="12/05/2024"
         infoPlato="Ceviche"
         cantidadPersonas="4"
        />
        <CardReserva
          numRes="56893214"
          fechaReserva="15/05/2024"
          infoPlato="Ceviche"
          cantidadPersonas="4"
        />
        </section>
    </>
  )
}