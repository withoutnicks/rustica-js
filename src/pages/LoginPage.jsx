import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="h-screen bg-zinc-100 flex justify-center items-center">
        <article className="w-96 bg-zinc-900 rounded-lg shadow px-5 py-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-100 text-center">
            Iniciar Sesion
          </h1>
          
          <form className="space-y-4 mt-4" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-100">
                Correo
              </label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-zinc-900 rounded-lg  block w-full p-2.5" placeholder="name@rustica.com" required autoComplete="off"/>
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-zinc-100">
                Contraseña
              </label>
              <input type="password" name="password" id="password" placeholder="*********" className="bg-gray-50 border border-gray-300 text-zinc-900 rounded-lg block w-full p-2.5" required autoComplete="off"/>
            </div>

            <button type="submit" className="w-full text-dark bg-rus-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Entrar
            </button>

            <p className="text-sm font-light text-zinc-400">
              No Tienes cuenta?
              <Link to={"/register"} className="font-medium text-primary-600 hover:underline ml-1">
                Registrate
              </Link>
            </p>
          </form>

        </article>
      </section>
    </>
  );
}

export default Login;
