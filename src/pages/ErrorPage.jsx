import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="bg-rus-secondary h-screen flex flex-col justify-center items-center px-6 gap-4">
      <h1 className="text-4xl font-bold text-center text-indigo-500">{error.statusText || error.message}</h1>
      <p className="text-wrap text-left text-white">Lo sentimos, ha ocurrido un error inesperado.</p>
      <img src="./img/angryCat.png" className="w-80 object-cover drop-shadow-xl" />
      <Link className="bg-indigo-500 px-6 py-2 text-white rounded-lg text-center" to={"/"}>
        <img src="./icons/home.svg"/>
      </Link>
    </section>
  );
}
