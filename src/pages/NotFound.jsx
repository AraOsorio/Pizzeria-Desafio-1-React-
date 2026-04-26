import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5 text-dark">
      <h1 className="display-4">Lo sentimos! Ésta página no existe</h1>
      

      <Link to="/" className="btn btn-dark mt-3">
        Volver al inicio 🍕
      </Link>
    </div>
  );
};

export default NotFound;