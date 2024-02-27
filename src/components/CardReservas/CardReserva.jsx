export const CardReserva = ({numRes, fechaReserva, cantidadPersonas}) => {
  return (
    <>
      <div className="bg-rus-primary flex justify-around w-4/5 py-4 items-center rounded-lg">
        <h2 className="text-lg">💾</h2>
        <div>
          <h3><strong>#</strong>{numRes} </h3>
          <p><strong>Fecha:</strong> {fechaReserva} </p>
          <p><strong>Invitados:</strong> {cantidadPersonas} </p>
        </div>
        <div className="text-center">
          <ul>
            <strong>Platos</strong>
            <li>Lorem, ipsum.</li>
            <li>Loremm</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <button className="bg-yellow-200 px-4 py-2 mb-1 rounded-md">Editar</button>
          <button className="bg-red-200 px-4 py-2 rounded-md">Eliminar</button>
        </div>
      </div>
    </>
  )
}

    