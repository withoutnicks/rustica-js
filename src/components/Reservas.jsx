import { CardReserva } from "./CardReservas/CardReserva";

export const Reservas = () => {
  return (
    <>
      <section className="w-full h-auto my-4 flex flex-col items-center gap-4">
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
  );
};
