import './FormTwo.css'
import { InputForm } from './Input/InputForm'

export const FormTwo = ({ onSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(); 
  };

  return (
    <>
      <article className="form__container">
        <div className='form__title'>
          <img src="./icons/menu.svg" className='img__form'/>
          <h4>Procede con el pago</h4>
        </div>
        <small>Estos datos son necesario para la reserva</small>
        <br />
        <form onSubmit={handleSubmit}>
          <InputForm title='Tarjeta' id='numeroTar' type='text' placehodler='4776-6964-7556-2319'/>
          <InputForm title='Titular' id='titularTar' type='text' placehodler='Muñoz Diaz'/>
          <div className='row__form'>
            <InputForm title='CCV' id='ccvTar' type='number' placehodler='125'/>
            <InputForm title='Fecha Vencimiento' id='venceTar' type='text' placehodler='12/2025'/>
          </div>

          <div className='actions__form two'>
            <button className='btnSiguiente' type='submit'>Siguiente</button>
          </div>
          
        </form>
      </article>
    </>
  )
}