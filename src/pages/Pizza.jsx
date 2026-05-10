import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">

      <h2>{pizza.name}</h2>

      <img
        src={pizza.img}
        alt={pizza.name}
        className="img-fluid"
        style={{
          maxWidth: "400px",
          borderRadius: "10px"
        }}
      />

      <p className="mt-3">{pizza.desc}</p>

      <h5>
        Ingredientes:
      </h5>

      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>🍕 {ing}</li>
        ))}
      </ul>

      <h4>
        Precio: ${pizza.price.toLocaleString("es-CL")}
      </h4>

    </div>
  );
};

export default Pizza;