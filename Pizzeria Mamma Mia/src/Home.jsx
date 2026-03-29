import Header from "./Header";
import CardPizza from "./Cardpizza";

const Home = () => {
  return (
    <>
      <Header />
      
      <div className="container mt-5">
  <div className="row">

    <div className="col-md-4">
      <CardPizza
        nombre="Napolitana"
        precio={5950}
        ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}
        imagen="https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/8d83d9ed4567fa15456d8eec7557e60006a15576.jpg"
      />
    </div>

    <div className="col-md-4">
      <CardPizza
        nombre="Española"
        precio={6950}
        ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        imagen="https://tofuu.getjusto.com/orioneat-local/resized2/QyRsDfua3FTxx55HZ-2400-x.webp"
      />
    </div>

    <div className="col-md-4">
      <CardPizza
        nombre="Pepperoni"
        precio={6950}
        ingredientes={["mozzarella", "pepperoni", "orégano"]}
        imagen="https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2.jpg"
      />
    </div>

  </div>
</div>

    </>
  );
};

export default Home;