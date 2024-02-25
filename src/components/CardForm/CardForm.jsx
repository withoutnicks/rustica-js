import { useState } from 'react';
import "./CardForm.css";

export const CardForm = ({urlImg, nombPlato, preciPlato, onCantidadChange }) => {

  const [cantidad, setCantidad] = useState(0)
  const handleSumar = () => {
    const nuevaCantidad = cantidad + 1;
    setCantidad(nuevaCantidad);
    onCantidadChange(nombPlato, true, preciPlato);
  };

  const handleRestar = () => {
    if (cantidad > 0) {
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      onCantidadChange(nombPlato, false, preciPlato);
    }
  };

  return (
    <>
      <div className="plato__container">
        
        <div className="plato__info">
          <img src={urlImg} className="cardf__img"/>
          <div className="group">
            <h4 className="plato__title">{nombPlato}</h4>
            <small className="plato__precio">S/.{preciPlato}</small>
          </div> 
        </div>

        <div className="plato__cantidad">
          <button type="button" className="restarCant" onClick={handleRestar}>-</button>
          <p className="cantidad">{cantidad}</p>
          <button type="button" className="sumarCant" onClick={handleSumar}>+</button>
        </div>
        
      </div>
    </>
  )
}