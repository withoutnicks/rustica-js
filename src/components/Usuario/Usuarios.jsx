import './Usuarios.css';

export const Usuarios = ({nombreUsuario, fechaReserva, infoPlato, cantidadPersonas }) => {
  return (
    <div className="card__res">
    <div className="card__contenido">
      <p className="card__nomb"> NOMBRE: {nombreUsuario}</p>
      <p className="card__fecha"> Fecha: {fechaReserva}</p>
      <p className="card__info"> Plato: {infoPlato}</p>
      <p className="card__cantid"> Cantidad: {cantidadPersonas}</p>
    </div>
    <div className="card__botones">
      <button className="btnEditar">Editar</button>
      <button className="btnEliminar">Eliminar</button>
    </div>
  </div>
  )
}

//nombre usuario    
//fecha reserva    //informacion del plato   //boton editar  //eliminar 
//cantidad de personas


    