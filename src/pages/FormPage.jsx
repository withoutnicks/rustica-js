import "./FormPage.css";
import { useState } from 'react';
import { CardForm } from "../components/CardForm/CardForm";
import { Link } from "react-router-dom";

function Form() {
  const [total, setTotal] = useState(50);

  const handleCantidadChange = (plato, isIncrementing) => {
    setTotal(prevTotal => isIncrementing ? prevTotal + obtenerPrecio(plato) : prevTotal - obtenerPrecio(plato));
  };

  const obtenerPrecio = (plato) => {
    const precios = {
      'Ceviche': 35,
      'Causa Rellena': 20,
      'Arroz con Pollo': 30,
      'Caldo de Gallina': 15,
      'Papa a la guancaina': 20
    };
    return precios[plato];
  };

  return (
    <>
      <section className="form-container">
        <article className="form-one">
          <div className="form__title">
            <img src="./icons/menu.svg" className="img__form" />
            <h3>Completa tu reserva</h3>
          </div>
          <small className="msg__conditional">
            * El precio de toda reserva es de <strong>S/. 50.00</strong> y va cambiar según los platos
          </small>
          <br />
          <form>
            <CardForm 
              urlImg="https://i.pinimg.com/236x/74/b8/e5/74b8e5cd81f5c4ba6f05a73c6e23304d.jpg"
              nombPlato="Ceviche"
              preciPlato={obtenerPrecio('Ceviche')}
              onCantidadChange={handleCantidadChange}
            />

            <CardForm 
              urlImg="https://i.pinimg.com/236x/f2/cc/79/f2cc79d6b14b915ce983646ff90c590c.jpg"
              nombPlato="Causa Rellena"
              preciPlato={obtenerPrecio('Causa Rellena')}
              onCantidadChange={handleCantidadChange}
            />

            <CardForm 
              urlImg="https://i.pinimg.com/236x/ba/e3/78/bae3785f8c03bc07187c1c582f60409e.jpg"
              nombPlato="Arroz con Pollo"
              preciPlato={obtenerPrecio('Arroz con Pollo')}
              onCantidadChange={handleCantidadChange}
            />

            <CardForm 
              urlImg="https://i.pinimg.com/236x/0a/7d/91/0a7d9196a2fbf07557c0f3db0e9f8dfb.jpg"
              nombPlato="Caldo de Gallina"
              preciPlato={obtenerPrecio('Caldo de Gallina')}
              onCantidadChange={handleCantidadChange}
            />

            <CardForm 
              urlImg="https://i.pinimg.com/236x/1c/63/76/1c6376c0ab50f3f5dc4daa68136898ea.jpg"
              nombPlato="Papa a la guancaina"
              preciPlato={obtenerPrecio('Papa a la guancaina')}
              onCantidadChange={handleCantidadChange}
            />

            <div className="actions__form">
              <Link className="btnCancelar" to={"/"}>Cancelar </Link>
              <h2>Total: S/. {total.toFixed(2)}</h2>
              <button className="btnSiguiente">Pagar</button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}

export default Form;
