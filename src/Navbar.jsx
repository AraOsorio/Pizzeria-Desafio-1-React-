import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";

const Navbar = () => {
  const total = 25000;
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      <span className="navbar-brand">Pizzería Mamma Mia!</span>

      <div className="d-flex gap-2">

        <Link to="/" className="btn btn-outline-light btn-sm">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light btn-sm">
              🔓 Profile
            </Link>

            <button 
              className="btn btn-outline-light btn-sm"
              onClick={logout}
            >
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