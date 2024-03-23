export const CardReserva = ({numRes, fechaReserva, cantidadPersonas}) => {
  return (
    <>
      <div className="bg-rus-secondary text-white flex justify-around w-4/5 py-4 items-center rounded-lg">
        <h2 className="text-lg">💾</h2>
        <div>
          <h3><strong>#</strong>{numRes} </h3>
          <p><strong>Fecha:</strong> {fechaReserva} </p>
          <p><strong>Invitados:</strong> {cantidadPersonas} </p>
        </div>
        <div className="flex flex-row gap-2">
          <button className="bg-yellow-200 text-white px-4 py-2 rounded-md">
            <img src="./icons/settings.svg" />
          </button>
          <button className="bg-red-200 px-4 py-2 rounded-md">
            <img src="./icons/trash.svg" />
          </button>
        </div>
      </div>
    </>
  )
}

    