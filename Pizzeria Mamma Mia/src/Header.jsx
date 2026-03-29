const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('/Header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        position: "relative",
        color: "white"
      }}
    >
      {/* CAPA OSCURA */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      ></div>

      {/* CONTENIDO */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas que podrás encontrar</p>
      </div>
    </header>
  );
};

export default Header;