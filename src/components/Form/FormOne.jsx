import { Link } from 'react-router-dom';
import './FormOne.css'
import { InputForm } from './Input/InputForm'

export const FormOne = ({ onSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(); 
  };

  return (
    <>
      <article className="form__container">
        <div className='form__title'>
          <img src="./icons/menu.svg" className='img__form'/>
          <h4> Escribe tus datos</h4>
        </div>
        <small>Estos datos son necesario para la reserva</small>
        <br />
        <form onSubmit={handleSubmit}>
          <InputForm title='Nombres' id='nombreCli' type='text' placehodler='Luis Angel'/>
          <InputForm title='Apellidos' id='apellidosCli' type='text' placehodler='Muñoz Diaz'/>
          <InputForm title='Correo' id='correoCli' type='email' placehodler='luizaid@gmail.com'/>
          <InputForm title='Elige el Dia' id='fechaRes' type='date'/>
          <InputForm title='Cantidad de Invitados' id='invitadosRes' type='number' placehodler='4'/>

          <div className='actions__form'>
            <Link className='btnCancelar' to={'/'} >Cancelar</Link>
            <button className='btnSiguiente' type='submit'>Siguiente</button>
          </div>
          
        </form>
      </article>
    </>
  )
}