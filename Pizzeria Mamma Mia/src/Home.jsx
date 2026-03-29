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
        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media"
      />
    </div>

    <div className="col-md-4">
      <CardPizza
        nombre="Española"
        precio={6950}
        ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media"
      />
    </div>

    <div className="col-md-4">
      <CardPizza
        nombre="Pepperoni"
        precio={6950}
        ingredientes={["mozzarella", "pepperoni", "orégano"]}
        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media"
      />
    </div>

  </div>
</div>

    </>
  );
};

export default Home;