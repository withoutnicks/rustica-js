import { useState } from "react";
import { CardForm } from "../components/CardForm/CardForm";
import { Link } from "react-router-dom";

function Form() {
  const [total, setTotal] = useState(50);

  const handleCantidadChange = (plato, isIncrementing) => {
    setTotal(prevTotal => isIncrementing ? prevTotal + obtenerPrecio(plato) : prevTotal - obtenerPrecio(plato));
  };

  const obtenerPrecio = (plato) => {
    const precios = {
      "Ceviche": 35,
      "Causa Rellena": 20,
      "Arroz con Pollo": 30,
      "Caldo de Gallina": 15,
      "Papa a la guancaina": 20
    };
    return precios[plato];
  };

  return (
    <>
      <section className="bg-rus-primary w-full flex justify-center gap-3 p-5">
        <article className="bg-white h-full p-3 rounded-lg">
          <div className="flex gap-2 items-center">
            <img src="./icons/menu.svg" className="w-8" />
            <h3 className="font-semibold">Completa tu reserva</h3>
          </div>
          <form className="flex flex-col gap-1 my-4">
            <label htmlFor="txt-date" className="text-sm">* Seleccione el dia de su reserva</label>
            <input type="datetime-local" id="txt-date" className="my-2 border p-2 accent-rus-primary"/>
          </form>
          <section>
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

            <div className="flex justify-between mx-4 my-6 items-center">
              <Link className="bg-slate-500 text-white rounded-md py-2 px-4" to={"/home"}>Cancelar </Link>
              <h2 className="font-medium">Total: S/. {total.toFixed(2)}</h2>
              <button className="bg-green-500 text-white rounded-md py-2 px-4">Pagar</button>
            </div>

            <label className="text-xs text-gray-700">
              * El precio de toda reserva es de <strong>S/. 50.00</strong> y va cambiar según los platos
            </label>
          </section>
        </article>
      </section>
    </>
  );
}

export default Form;
