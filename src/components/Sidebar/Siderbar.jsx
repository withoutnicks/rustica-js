import './Sidebar.css'

export const Sidebar = () => {
  return (
    <>
      <article className="nav__sidebar">
        <button className="nav__li" disabled>
          <img src='./icons/person.svg' className='nav__img' />
          <p className='nav__text'>Datos Personales</p>
        </button>
        <img src="./icons/arrow.svg" className='arrow'/>
        <button className="nav__li" disabled>
          <img src='./icons/cash.svg' className='nav__img' />
          <p className='nav__text'>Realizar Pago</p>
        </button>
        <img src="./icons/arrow.svg" className='arrow'/>
        <button className="nav__li" disabled>
          <img src='./icons/check.svg' className='nav__img' />
          <p className='nav__text'>Confirmacion</p>
        </button>
      </article>
    </>
  )
}