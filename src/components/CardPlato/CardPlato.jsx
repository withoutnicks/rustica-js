export const CardPlato = ({urlImg, nombPlato, preciPlato}) => {
  return (
    <>
      <div className="bg-rus-primary rounded-md w-52 h-auto p-4 flex flex-col gap-2 text-center">
        <img src={urlImg} className="w-24 h-24 object-cover rounded-md mx-auto "/>
        <h4 className="text-sm font-medium">{nombPlato}</h4>
        <p className="truncate text-xs text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio quaerat debitis.</p>
        <a href='#' className="bg-gray-950 text-white rounded-md py-1 mt-1">S/ {preciPlato}</a>
      </div>
    </>
  )
}