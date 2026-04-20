import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error(error));
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">

      <h2>{pizza.name}</h2>

      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "100%", maxWidth: "400px" }}
      />

      <p className="mt-3">{pizza.desc}</p>

      <h5>Ingredientes:</h5>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>🍕 {ing}</li>
        ))}
      </ul>

      <h4>Precio: ${pizza.price.toLocaleString("es-CL")}</h4>

      <button className="btn btn-dark mt-2">
        Añadir 🛒
      </button>

    </div>
  );
};

export default Pizza;