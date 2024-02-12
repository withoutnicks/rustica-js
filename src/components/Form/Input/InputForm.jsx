import './InputForm.css'

export const InputForm = ({title, id, type, placehodler = "Text here"}) => {
  return (
    <>
      <label htmlFor={id} className="item__form"> {title}
        <input id={id} type={type} placeholder={placehodler} required className='input__form'/>
      </label>
    </>
  )
}