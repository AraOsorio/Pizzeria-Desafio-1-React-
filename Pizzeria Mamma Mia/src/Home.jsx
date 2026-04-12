import Header from "./Header";
import CardPizza from "./Cardpizza";
import { pizzas } from "./assets/pizzas";

const Home = () => {
  return (
    <>
      <Header />

      <div className="d-flex justify-content-center gap-4 flex-wrap p-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            nombre={pizza.nombre}
            precio={pizza.precio}
            ingredientes={pizza.ingredientes}
            imagen={pizza.imagen}
          />
        ))}
      </div>
    </>
  );
};

export default Home;