import { useState } from "react";
import { useCart } from '../cart/CartContext';

const ItemCount = ({ stock, initial, onAdd, className }) => {
  const { dispatch } = useCart();

  const [counter, setCounter] = useState(initial);

  function sumar() {
    if (counter === stock) return;

    setCounter(counter + 1);
  }

  function restar() {
    if (counter === 0) return;

    setCounter(counter - 1);
  }

  const agregarAlCarrito = () => {
      for (let i = 0; i < counter; i++) {
        dispatch({ type: 'ADD_TO_CART', payload: { quantity: 1 } });
      }
  };
  return (
    <div className="container">
        <button onClick={restar}>
          -
        </button>
        <input className="text-center" value={counter} disabled />
        <button onClick={sumar}>
          +
        </button>
      <button className="w-100" onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
