import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-4 text-center">
      <h1>¡Uuuuuups! Lo sentimos mucho, esta página no ha sido encontrada</h1>
      <p>Página no encontrada</p>

      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;