import './FormTree.css'
import { Link } from 'react-router-dom';

export const FormTree = () => {
  return (
    <>
      <article className="form__container center">
        <img src="./icons/check.svg" className='confirm__img'/>
        <h2>Reserva completada</h2>
        <br />
        <Link className='btnCancelar' to="/">Cerrar</Link>
      </article>
    </>
  )
}