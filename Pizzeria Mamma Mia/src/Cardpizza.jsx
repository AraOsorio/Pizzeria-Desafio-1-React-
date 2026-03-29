const CardPizza = (props) => {
  return (
    <div className="card h-100">

      <img
        src={props.imagen}
        className="card-img-top"
        alt={props.nombre}
        style={{
          height: "200px",
    objectFit: "cover"
  }}
/>

      <div className="card-body d-flex flex-column">

        <h5 className="card-title">Pizza {props.nombre}</h5>

        <p className="text-muted">Ingredientes:</p>

        <ul>
          {props.ingredientes.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        <h6>
          Precio: ${props.precio.toLocaleString("es-CL")}
        </h6>

        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-outline-dark btn-sm">
            Ver más 👀
          </button>

          <button className="btn btn-dark btn-sm">
            Añadir 🛒
          </button>
        </div>

      </div>
    </div>
  );
};

export default CardPizza