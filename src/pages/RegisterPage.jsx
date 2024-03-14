import { useState } from 'react';
import { Link } from "react-router-dom";
import { createUser } from "../firebase/auth";
import { Toaster } from 'sonner';

function Register() {
  const [$email, setEmail] = useState("");
  const [$password, setPassword] = useState("");
  const [$username, setUsername] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
  
    try {
      const success = await createUser($email, $password, $username);

      if(success) {
        setEmail("");
        setPassword("");
        setUsername("");
      }
    } catch (error) {
      console.error("Error al crear usuario: ", error);
    }
  };
  
  return (
    <>
      <section className="h-screen bg-stone-800 flex justify-center items-center">
        <article className="w-96 bg-white rounded-lg shadow px-5 py-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center">
            Crear cuenta
          </h1>

          <form className="space-y-4 mt-4" onSubmit={handleCreateUser}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                Nombre
              </label>
              <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5" placeholder="Gerado Caycho" 
                type="text" 
                name="username" 
                id="username" 
                autoComplete="off" 
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Correo 
              </label>
              <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5" placeholder="name@rustica.com" 
                type="email" 
                name="email" 
                id="email" 
                autoComplete="off" 
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Contraseña
              </label>
              <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" 
                placeholder="*********" 
                type="password" 
                name="password" 
                id="password" 
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              className="w-full text-white bg-rose-600 hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Registrarse
            </button>
             
            <p className="text-sm font-light text-gray-500">
              Ya tienes cuenta?
              <Link to={"/login"} className="font-medium text-primary-600 hover:underline ml-1">
                Logeate
              </Link>
            </p>

          </form> 

          </article>  
      </section>
      <Toaster richColors/>    
    </>
  )
}

export default Register