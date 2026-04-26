import { Link } from "react-router-dom";
const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      {/* Título */}
      <span className="navbar-brand">Pizzería Mamma Mia!</span>

      {/* Botones */}
      <div className="d-flex gap-2">

        <Link to="/" className="btn btn-outline-light btn-sm">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light btn-sm">
              🔓 Profile
            </Link>

            <button className="btn btn-outline-light btn-sm">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light btn-sm">
              🔐 Login
            </Link>

            <Link to="/register" className="btn btn-outline-light btn-sm">
              📝 Register
            </Link>
          </>
        )}

        <Link to="/cart" className="btn btn-success btn-sm">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;