import "./FormPage.css";
import { CardForm } from "../components/CardForm/CardForm";
import { Link } from "react-router-dom";

function Form() {
  return (
    <>
      <section className="form-container">
        <article className="form-one">
          <div className="form__title">
            <img src="./icons/menu.svg" className="img__form" />
            <h3>Que platos desea comer</h3>
          </div>
          <small className="msg__conditional">
            * El precio de toda reserva es de <strong>S/. 50.00</strong> y va cambiar según los platos
          </small>
          <br />
          <form>

            <CardForm 
              urlImg="https://i.pinimg.com/236x/74/b8/e5/74b8e5cd81f5c4ba6f05a73c6e23304d.jpg"
              nombPlato="Ceviche"
              preciPlato="35.00"
            />

            <CardForm 
              urlImg="https://i.pinimg.com/236x/f2/cc/79/f2cc79d6b14b915ce983646ff90c590c.jpg"
              nombPlato="Causa Rellena"
              preciPlato="20.00"
            />

            <CardForm 
              urlImg="https://i.pinimg.com/236x/ba/e3/78/bae3785f8c03bc07187c1c582f60409e.jpg"
              nombPlato="Arroz con Pollo"
              preciPlato="30.00"
            />

            <CardForm 
              urlImg="https://i.pinimg.com/236x/0a/7d/91/0a7d9196a2fbf07557c0f3db0e9f8dfb.jpg"
              nombPlato="Caldo de Gallina"
              preciPlato="15.00"
            />

            <CardForm 
              urlImg="https://i.pinimg.com/236x/1c/63/76/1c6376c0ab50f3f5dc4daa68136898ea.jpg"
              nombPlato="Papa a la guancaina"
              preciPlato="20.00"
            />

            <div className="actions__form">
              <Link className="btnCancelar" to={"/"}>Cancelar </Link>
              <button className="btnSiguiente">Pagar</button>
            </div>

          </form>
        </article>
      </section>
    </>
  );
}

export default Form;
