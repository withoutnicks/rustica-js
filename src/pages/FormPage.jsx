import "./FormPage.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Form() {
  const { register, handleSubmit } = useForm();

  const sendData = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="form-container">
        <article className="form-one">
          <div className="form__title">
            <img src="./icons/menu.svg" className="img__form" />
            <h4> Escribe tus datos</h4>
          </div>
          <small>Estos datos son necesario para la reserva</small>
          <br />
          <form onSubmit={handleSubmit(sendData)}>
            <input
              type="text"
              placeholder="Tu nombre"
              autoComplete="off"
              {...register('nombres')}
            />

            <input
              type="text"
              placeholder="Tus apelldios"
              autoComplete="off"
              {...register('apellidos')}
            />

            <input
              type="email"
              placeholder="Tu correo"
              autoComplete="off"
              {...register('correo')}
            />

            <input
              type="datetime-local"
              {...register('fecha')}
            />

            <input
              type="number"
              placeholder="Cuantas personas asistiran"
              autoComplete="off"
              {...register('invitados')}
            />

            <div className="actions__form">
              <Link className="btnCancelar" to={"/"}>Cancelar </Link>
              <button className="btnSiguiente">Siguiente</button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}

export default Form;
