import "./CardForm.css";

export const CardForm = ({urlImg, nombPlato, preciPlato}) => {
  return (
    <>
      <div className="plato__container">
        
        <div className="plato__info">
          <img src={urlImg} className="card__img"/>
          <div className="group">
            <h3 className="plato__title">{nombPlato}</h3>
            <p className="plato__precio">S/.{preciPlato}</p>
          </div> 
        </div>

        <div className="plato__cantidad">
          <button type="button" className="restarCant">-</button>
          <h3 className="cantidad">0</h3>
          <button type="button" className="sumarCant">+</button>
        </div>
        
      </div>
    </>
  )
}