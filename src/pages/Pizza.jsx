import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} width="300" />
      <p>{pizza.desc}</p>
      <p><strong>Precio:</strong> ${pizza.price}</p>
    </div>
  );
};

export default Pizza;