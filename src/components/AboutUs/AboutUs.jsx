import "./AboutUs.css";
import FocusSlider from "./Slider/Slider";

export const Aboutus = () => {
  return (
    <>
      <section className="container__aboutus">
        <article className="container__info">
          <p>
            El sueño empezó con una pequeña tienda en Jesús María pero gracias a
            la dedicación, creatividad y empeño, hoy contamos con 48 locales en
            lima y alrededor de todo el país. En un inicio nos destacamos por la
            venta de pizzas y pastas pero con la finalidad de satisfacer a
            nuestros clientes hemos ampliado nuestra cartera de productos.
          </p> 
          <br />
          <strong>
            Hoy Corporación Rustica atiende con la pasión y el amor por todo
            el Peru
          </strong>
          <br />
          <strong>Rubros:</strong>
          <p>Rustica Hoteles</p>
          <p>Rustica Restaurantes</p>
          <p>Fundacion Rustica</p>
        </article>
        <article className="container__slider">
          <FocusSlider />
        </article>
      </section>
    </>
  );
};
