import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <section className="h-screen bg-cyan-800 flex justify-center items-center">
        <article className="w-96 bg-white rounded-lg shadow p-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center">
            Crear cuenta
          </h1>

          <form className="space-y-4 mt-4" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Tu Correo 
              </label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5" placeholder="name@rustica.com" required />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Tu Contraseña
              </label>
              <input type="password" name="password" id="password" placeholder="*********" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" required />
            </div>

            <button type="submit" className="w-full text-dark bg-rose-100 hover:bg-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Registrarse
            </button>
             
            <p className="text-sm font-light text-gray-500">
              Ya tienes cuenta?
              <Link to={"/"} className="font-medium text-primary-600 hover:underline ml-1">
                Logeate
              </Link>
            </p>

          </form> 
          </article>  
      </section>    
    </>
  )
}

export default Register