import { useState } from 'react';

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
      <div className="flex p-4 justify-between items-center my-2 shadow-md">       
        <div className="flex gap-3">
          <img src={urlImg} className="w-16 h-16 rounded-md object-cover"/>
          <div className="flex flex-col justify-center">
            <h4 className='font-medium'>{nombPlato}</h4>
            <small>S/.{preciPlato}</small>
          </div> 
        </div>

        <div className="flex gap-4 items-center">
          <button type="button" className="font-medium cursor-pointer" onClick={handleRestar}>-</button>
          <p className="select-none">{cantidad}</p>
          <button type="button" className="font-medium cursor-pointer" onClick={handleSumar}>+</button>
        </div>      
      </div>
    </>
  )
}