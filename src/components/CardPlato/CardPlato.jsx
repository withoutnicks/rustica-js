export const CardPlato = ({ plato }) => {
  const { urlImg = "", name, description, price } = plato || {};
  
  return (
    <>
      <div className="bg-rus-primary rounded-md w-52 h-auto p-4 flex flex-col gap-2 text-center ">
        <img src={urlImg} className="w-24 h-24 object-cover rounded-md mx-auto "/>
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="truncate text-xs text-wrap overflow-clip">{description}</p>
        <button className= "text-dark font-bold py-1 mt-1 cursor-default">S/ {price}</button>
      </div>
    </>
  );
};