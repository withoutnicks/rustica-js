import './CardReserva.css';

export const CardReserva = ({numRes, fechaReserva, cantidadPersonas}) => {
  return (
    <>
      <div className="card__res">

        <div className="card__info">
          <h3 className="card__numres">
            <strong>#</strong>{numRes}
          </h3>
          <p className="card__fecha">
            <strong>Fecha:</strong> {fechaReserva}
          </p>
          <p className="card__cantid">
            <strong>Invitados:</strong> {cantidadPersonas}
          </p>
        </div>

        <div className="card__platos">
          <ul>
            <strong>Platos</strong>
            <li>Lorem, ipsum.</li>
            <li>Loremm</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>

        <div className="card__actions">
          <button className="btnEditar">Editar</button>
          <button className="btnEliminar">Eliminar</button>
        </div>

      </div>
    </>
  )
}

    