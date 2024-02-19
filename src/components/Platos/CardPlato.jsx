import './CardPlato.css'

export const CardPlato = ({urlImg, nombPlato, preciPlato}) => {
  return (
    <>
      <div className="card__container">
        <img src={urlImg} className="card__img"/>
        <h4 className="card__title">{nombPlato}</h4>
        <p className="card__descrip">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio quaerat debitis.</p>
        <a href='#' className="card__precio">S/.{preciPlato}</a>
      </div>
    </>
  )
}