const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      {/* Título */}
      <span className="navbar-brand">Pizzería Mamma Mia!</span>

      {/* Botones */}
      <div className="d-flex gap-2">

        <button className="btn btn-outline-light btn-sm">
          🍕 Home
        </button>

        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">
              🔒 Profile
            </button>

            <button className="btn btn-outline-light btn-sm">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light btn-sm">
              🔓 Login
            </button>

            <button className="btn btn-outline-light btn-sm">
              🔓 Register
            </button>
          </>
        )}

        <button className="btn btn-success btn-sm">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;