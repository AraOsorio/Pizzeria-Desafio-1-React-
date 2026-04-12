import { useState } from "react";

const Cart = () => {
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: "Napolitana",
      precio: 5950,
      cantidad: 1,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5oX62Jd4kjpTOiWxUVV0zNTApvQxaTMuEg&s"
    },
    {
      id: 2,
      nombre: "Española",
      precio: 6950,
      cantidad: 1,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQjx4oD8CwzwH8qS7M_rhTtpdK5f4L_BE-Q&s"
    }
  ]);

  const aumentar = (id) => {
    const nuevo = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCarrito(nuevo);
  };

  const disminuir = (id) => {
    const nuevo = carrito
      .map((item) =>
        item.id === id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter((item) => item.cantidad > 0);

    setCarrito(nuevo);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="p-4">
      <h3>Detalles del pedido:</h3>

      {carrito.map((item) => (
        <div key={item.id} className="d-flex align-items-center gap-3 mb-3">
          <img src={item.imagen} width="80" />
          <p>{item.nombre}</p>
          <p>${item.precio}</p>

          <button onClick={() => disminuir(item.id)}>-</button>
          <span>{item.cantidad}</span>
          <button onClick={() => aumentar(item.id)}>+</button>
        </div>
      ))}

      <h4>Total: ${total.toLocaleString()}</h4>

      <button className="btn btn-dark">Pagar</button>
    </div>
  );
};

export default Cart;