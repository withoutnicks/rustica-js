import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <p className="error-title">
        <h1>{error.statusText || error.message}</h1>
      </p>
      <div className="error-text-container">
        <p className="error-text">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, comunícate
          con nuestro soporte técnico
        </p>
        <Link className="btn" to={"/"}>
          {" "}
          Volver{" "}
        </Link>
      </div>
    </div>
  );
}
