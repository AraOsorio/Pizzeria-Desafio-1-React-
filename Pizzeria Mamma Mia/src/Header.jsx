const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('/Header.jpg')" ,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>Tenemos las mejores pizzas que podrás encontrar</p>
    </header>
  );
};

export default Header;