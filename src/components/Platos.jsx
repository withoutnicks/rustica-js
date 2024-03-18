import { CardPlato } from "./CardPlato/CardPlato";
import { useState, useEffect } from "react";
import { getPlatos } from "../firebase/firestore";

export const Platos = () => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    const obtnPlatos = async () => {
      const dataPlatos = await getPlatos();
      setPlatos(dataPlatos);
    };

    obtnPlatos();
  }, []);

  return (
    <>
      <section className="mx-4 flex justify-around flex-wrap gap-4 h-auto p-6">
        {platos.map((plato) => (
          <CardPlato key={plato.id} plato={plato} />
        ))}
      </section>
    </>
  );
};
