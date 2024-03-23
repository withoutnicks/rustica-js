import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Toaster } from 'sonner';
import { loginUser } from "../firebase/auth";

function Login() {
  const [$email, setEmail] = useState("");
  const [$password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginUser = async (e) => {
    e.preventDefault();

    try {
      const loginSuccess = await loginUser($email, $password);
      if (loginSuccess) {
        navigate("/home");
      } else {
        setEmail("")
      }
    } catch (error) {
      console.log("Algo salio mal", error);
    }
  }

  return (
    <>
      <section className="h-screen bg-rus-secondary flex justify-center items-center">
        <article className="w-96 bg-zinc-900 rounded-lg shadow px-5 py-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-100 text-center">
            Iniciar Sesion
          </h1>
          
          <form className="space-y-4 mt-4" onSubmit={handleLoginUser}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-100">
                Correo
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="bg-gray-50 border border-gray-300 text-zinc-900 rounded-lg block w-full p-2.5" placeholder="name@rustica.com" 
                required 
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-zinc-100">
                Contraseña
              </label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="*********" 
                className="bg-gray-50 border border-gray-300 text-zinc-900 rounded-lg block w-full p-2.5" 
                required 
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              className="w-full text-white bg-rus-btn-primary font-medium rounded-lg text-sm px-5 py-3 text-center"
            >
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
      <Toaster richColors/>  
    </>
  );
}

export default Login;
